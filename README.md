# SkyVito

## The final project at Skypro online university. This project features the following functionality:

    - Register and log in
    - Update the profile data
    - Post advertisements
    - Add or remove photos from the advertisement
    - Delete and modify the advertisement
    - Add comments to the advertisement
    - Search and view posts published by other users
    - Access the project from a mobile phone

---

## The following stack was used in the project:

    - JavaScript
    - React.js
    - React Router Dom
    - RTK Query
    - SASS
    - Vite

---

## Start the project:

    ```
    - git clone https://github.com/denniztr/project-reactjs.git
    ```

    ```
    - install the project packages -npm i
    ```

    ```
    - npm run dev
    ```

---

## Start the backend:

    - To run the backend, you will need to install Docker. 
    - Download the version for your operating system and launch it. 
    - Follow the installer instructions. After installation, restart your computer. 
    - Launch Docker using the shortcut. Download and extract the archive. 
    - Navigate to the extracted folder via the terminal. 
    - Run the following command in the terminal: docker compose -f docker-compose-backend.yaml up -d. 
    - After the first execution of the command, all images will be pulled, but may not start. 
    - In this case, re-run the command: docker compose -f docker-compose-backend.yaml up -d. 
    - Afterward, the backend and Swagger will be accessible at http://localhost:8090/. 
    - To stop the backend, execute: docker-compose down.
