import subprocess

librerias = ['pandas', 'requests', 'fastapi', 'scikit-learn']

for libreria in librerias:
    try:
        subprocess.check_call(['pip', 'install', libreria])
        print(f"La librería {libreria} ha sido instalada correctamente.")
    except subprocess.CalledProcessError:
        print(f"Error al instalar la librería {libreria}.")



import pandas as pd
import requests

from fastapi import FastAPI

headers = {
    "Authorization": "Bearer",
    "Content-Type": "application/json",
    "x-api-key": "REYDEREDES"
}

payload = {
    "email": "gordinho",
    "password": "rey"
}
us = requests.post("http://localhost:3000/auth/login", json=payload)
json_data = us.json()

user_id = json_data.get('id')


app = FastAPI()

@app.get(f"http://localhost:3000/userData/searchHistory/{id}")
def get_search_history(id: int):
    return requests.get(f"http://localhost:3000/userData/searchHistory/{id}", headers=headers).json()

search_history_data = get_search_history(user_id)
search_history_data

@app.get(f"http://localhost:3000/userData/visitHistory/{id}")
def get_visit_history(id: int):
    return requests.get(f"http://localhost:3000/userData/visitHistory/{id}", headers=headers).json()

visit_history_data = get_visit_history(user_id)
visit_history_data

get_all_projects_url = "http://localhost:3000/userData/getAllProjects"
headers_projects = {
    "x-api-key": "REYDEREDES"
}
response_all_projects = requests.get(get_all_projects_url, headers=headers_projects)
all_projects_data = response_all_projects.json()


lista1 = search_history_data.split()
lista2 = visit_history_data.split()

all_projects_data[1]

df1 = pd.DataFrame({
    'Palabra': lista1
})

df2 = pd.DataFrame({
    'AllPalabra': lista2
})
df3 = pd.DataFrame(all_projects_data)


df3.head(15)

df_concatenated = pd.concat([df1, df2], axis=1)

df_final = pd.merge(df_concatenated, df3, left_index=True, right_index=True)

df_final = df_final.drop(['createdAt'], axis=1)
df_final = df_final.drop(['updatedAt'], axis=1)
df_final = df_final.drop(['statusId'], axis=1)
df_final = df_final.drop(['maxMembers'], axis=1)
df_final = df_final.drop(['collaborators'], axis=1)


"""ACA TENES QUE CONVERTIR TODOS LOS DATOS A VECTORES, CON EL CODIGO QUE TENES EN COLAB, PARA DESPUES PODER HACER FACTORIZACION DE MATRICES"""

from sklearn.feature_extraction.text import TfidfVectorizer

tfidf = TfidfVectorizer(max_features=5000)

vectorized_data = tfidf.fit_transform(df_final["description"])

vectorized_dataframe = pd.DataFrame(vectorized_data.toarray(), index=df_final["description"].index.tolist())


from sklearn.decomposition import TruncatedSVD

com = vectorized_dataframe.shape[1] - 1

svd = TruncatedSVD(n_components=com)

reduced_data = svd.fit_transform(vectorized_dataframe)

svd.explained_variance_ratio_.cumsum()

from sklearn.metrics.pairwise import cosine_similarity

similarity = cosine_similarity(reduced_data)

from sklearn.metrics.pairwise import linear_kernel

cosine_sim = linear_kernel(reduced_data, reduced_data)

indices = pd.Series(df_final.index, index=df_final['name']).drop_duplicates()

def get_recommendations(name, cosine_sim=cosine_sim):
    idx = indices[name]

    sim_scores = list(enumerate(cosine_sim[idx]))

    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)

    sim_scores = sim_scores[1:20]

    project_indices = [i[0] for i in sim_scores]

    recommended_projects = [{"projectId": int(df_final['id'].iloc[i])} for i in project_indices]

    return recommended_projects


"""Hora de enviar los resultados de la similitud de cosenos entre vectores a la base de datos"""

import json

url = "http://localhost:3000/recommendations/recommend"

datos_json = {
    "id": 55,
    "projectsWithAffinities": get_recommendations("dog")
}

encabezado = {
    "Authorization": "Bearer",
    "Content-Type": "application/json",
    "x-api-key": "REYDEREDES"
}

encabezado = {
    "Authorization": "Bearer",
    "Content-Type": "application/json",
    "x-api-key": "REYDEREDES"
}

respuesta = requests.post(url, data=json.dumps(datos_json), headers=encabezado)

if respuesta.status_code == 200:
    print('Solicitud exitosa. Respuesta del servidor:')
    print(respuesta.json())
else:
    print(f'Error en la solicitud. Código de estado: {respuesta.status_code}')
    print(respuesta.text)

df_history = df_final.drop(["id"], axis=1)
df_history = df_history.drop(["name"], axis=1)
df_history = df_history.drop(["creatorId"], axis=1)
df_history = df_history.drop(["AllPalabra"], axis=1)

def recommend_projects():

    df_history['Palabra'] = df_history['Palabra'].astype(str)
    df_history['description'] = df_history['description'].astype(str)

    tfidf_vectorizer = TfidfVectorizer(stop_words='english')
    tfidf_matrix = tfidf_vectorizer.fit_transform(df_history['description'], df_history['Palabra'])

    cosine_similarities = linear_kernel(tfidf_matrix, tfidf_matrix)

    search_similarity = cosine_similarities[-1]
    related_projects_indices = search_similarity.argsort()[:-1][::-1]
    """ recommended_projects = df_final.iloc[related_projects_indices][['id']] """
    """ recommended_project_ids = df_final.iloc[related_projects_indices]['id'].tolist() """
    recommended_projects = [{'projectId': project_id} for project_id in df_final.iloc[related_projects_indices]['id'].tolist()]

    return recommended_projects

recommendations = recommend_projects()

import json

url = "http://localhost:3000/recommendations/recommend"

datos_json_history = {
    "id": user_id,
    "projectsWithAffinities": recommend_projects()
}

encabezado = {
    "Authorization": "Bearer",
    "Content-Type": "application/json",
    "x-api-key": "REYDEREDES"
}

encabezado = {
    "Authorization": "Bearer",
    "Content-Type": "application/json",
    "x-api-key": "REYDEREDES"
}

respuesta = requests.post(url, data=json.dumps(datos_json_history), headers=encabezado)

if respuesta.status_code == 200:
    print('Solicitud exitosa. Respuesta del servidor:')
    print(respuesta.json())
else:
    print(f'Error en la solicitud. Código de estado: {respuesta.status_code}')
    print(respuesta.text)