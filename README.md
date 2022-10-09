# English for kids (server)

Server for [English for kids](https://github.com/diman17/english-for-kids_client) app

### Built with

- Javascript
- Node.js
- Express
- PostgreSQL

## Setup and Running

- Install [Node.js](https://nodejs.org/en/)
- Fork this repository: https://github.com/diman17/english-for-kids_server/
- Clone your newly created repo: `https://github.com/<%your_github_username%>/english-for-kids_server/`
- Go to folder `english-for-kids_server`
- To install all dependencies use `npm install`
- Create `.env` file where you need to specify the values of the following variables (database PostgeSQL):
  - `PORT`
  - `DB_USER`
  - `DB_PASSWORD`
  - `DB_HOST`
  - `DB_PORT`
  - `DB_NAME`
- Start server `npm start`

## Usage

### Categories

<details>
  <summary>Get categories</summary>

  * **URL**

      `/categories`

  * **Method:**

      `GET`

  * **Headers:**

      None

  *  **URL Params**

      None

  * **Query Params**

      None

  * **Data Params**

     None
</details>

<details>
  <summary>Get category by ID</summary>

  * **URL**

      `/categories/:id`

  * **Method:**

      `GET`

  * **Headers:**

      None

  *  **URL Params**

      `id=[integer]`

  * **Query Params**

      None

  * **Data Params**

     None
</details>

<details>
  <summary>Create category</summary>

  * **URL**

      `/categories`

  * **Method:**

      `POST`

  * **Headers:**

      `'Content-Type': 'application/json'`

  *  **URL Params**

      None

  * **Query Params**

      None

  * **Data Params**


    ```typescript
      {
        name: string
      }
    ```
</details>

<details>
  <summary>Update category</summary>

  * **URL**

      `/categories`

  * **Method:**

      `PUT`

  * **Headers:**

      `'Content-Type': 'application/json'`

  *  **URL Params**

      None

  * **Query Params**

      None

  * **Data Params**

    ```typescript
      {
        id: number,
        name: string
      }
    ```
</details>

<details>
  <summary>Delete category</summary>

  * **URL**

      `/categories`

  * **Method:**

      `DELETE`

  * **Headers:**

      `'Content-Type': 'application/json'`

  *  **URL Params**

      None

  * **Query Params**

      None

  * **Data Params**

    ```typescript
      {
        id: number
      }
    ```
</details>

### Cards

<details>
  <summary>Get cards</summary>

  * **URL**

      `/cards`

  * **Method:**

      `GET`

  * **Headers:**

      None

  *  **URL Params**

      None

  * **Query Params**

      None

  * **Data Params**

     None
</details>

<details>
  <summary>Get cards by category ID</summary>

  * **URL**

      `/cards/:id`

  * **Method:**

      `GET`

  * **Headers:**

      None

  *  **URL Params**

      `id=[integer]`

  * **Query Params**

      None

  * **Data Params**

     None
</details>

<details>
  <summary>Get card by ID</summary>

  * **URL**

      `/cards/card/:id`

  * **Method:**

      `GET`

  * **Headers:**

      None

  *  **URL Params**

      `id=[integer]`

  * **Query Params**

      None

  * **Data Params**

     None
</details>

<details>
  <summary>Create card</summary>

  * **URL**

      `/cards`

  * **Method:**

      `POST`

  * **Headers:**

      `'Content-Type': 'application/json'`

  *  **URL Params**

      None

  * **Query Params**

      None

  * **Data Params**

    ```typescript
      {
        image: string,
        audio: string,
        audioName: string,
        text: string,
        translate: string,
        categoryId: number
      }
    ```
</details>

<details>
  <summary>Update card</summary>

  * **URL**

      `/cards`

  * **Method:**

      `PUT`

  * **Headers:**

      `'Content-Type': 'application/json'`

  *  **URL Params**

      None

  * **Query Params**

      None

  * **Data Params**

    ```typescript
      {
        id: number,
        image: string,
        audio: string,
        audioName: string,
        text: string,
        translate: string
      }
    ```
</details>

<details>
  <summary>Delete card</summary>

  * **URL**

      `/cards`

  * **Method:**

      `DELETE`

  * **Headers:**

      `'Content-Type': 'application/json'`

  *  **URL Params**

      None

  * **Query Params**

      None

  * **Data Params**

    ```typescript
      {
        id: number
      }
    ```
</details>
