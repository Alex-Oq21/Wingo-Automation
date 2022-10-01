# Wingo-Automation
Hola en este README dejare el proceso para clonar y ejecutar el script de la automatización de la automatización.

Te presento 2 opciones, la priemra con Git y la segunda descargando el proyecto en formato Zip.

# Forma Git

- En el enlace adjunto de mi humilde pero muy sensual Github, los enviará al repositorio del proyecto.

![image](https://user-images.githubusercontent.com/63822421/193386341-2815b539-c1dc-4fd4-8606-dcf19c65bf97.png)

- Como primer paso crea una carpeta donde quieras alojar el proyecto y abre una consola de Git e iniciar un repositorio Git en local como se muestra aquí
Con el comando: git init

![image](https://user-images.githubusercontent.com/63822421/193386500-f43aaebb-0617-496e-967b-252308b95334.png)

- Una vez hecho esto, en el repositorio hacemos click en Code y copiamos la url del repositorio como se muestra aquí.

![image](https://user-images.githubusercontent.com/63822421/193386583-10d79246-beb4-4ae8-a591-295e1fee09e7.png)

- Una vez hecho esto, en nuestra consola git usamos el comando: git clone https://github.com/Alex-Oq21/Wingo-Automation.git

- Como se muestra aquí.

![image](https://user-images.githubusercontent.com/63822421/193386650-579886da-ac01-4365-8cc0-a9a67934c0d3.png)


- Una vez hecho esto, tendrás una carpeta la cual podras abrir desde el visual studio code para ejecutar.

![image](https://user-images.githubusercontent.com/63822421/193386694-3cb009f9-7e0c-476f-939a-da1fbd80b0d3.png)

![image](https://user-images.githubusercontent.com/63822421/193386709-44d27541-b048-4a28-93e0-7e8b33783a02.png)

# Descargar el proyecto como archivo Zip

- Otra forma de descargar el proyecto es en el repositorio en la misma opción Code, la última opción te da la opción de descargar el proyecto.

![image](https://user-images.githubusercontent.com/63822421/193386833-366f5e8a-f7de-47a2-8cc1-30b87e000c2f.png)

- Una vez descargado, extraes los archivos y una vez hecho esto, ya podrás abrir el proyecto desde el visual studio code.

![image](https://user-images.githubusercontent.com/63822421/193387995-1fd44946-7485-46b0-b819-3a85ddfc06c7.png)

# Ejecutar proyecto

- Una vez abierto el proyecto, abrimos el archivo WingoPage.js

![image](https://user-images.githubusercontent.com/63822421/193391891-770d0210-f110-404a-ae24-e85fbec8eea2.png)

- Una vez abierto el archivo, precionas CTRL + SHIFT + Ñ y abrirá una terminal.

![image](https://user-images.githubusercontent.com/63822421/193392177-e4734b46-8ec9-4612-a045-57752f09289d.png)

- En la terminal usaremos el comnado: npx cypress open o en caso de que no sriva, puedes usar el comando: node_modules\.bin\cypress open y presionar Enter.

![image](https://user-images.githubusercontent.com/63822421/193392270-b2961417-1380-4e9d-86eb-985634d4cc95.png)

- Una vez hecho esto, se abirirá una consola de Cypress, en donde elegiremos la opción E2E 

![image](https://user-images.githubusercontent.com/63822421/193392326-984aa39c-f1aa-4e61-a6f6-0dbbd7b7950e.png)

- Una vez hecho esto, seleccionas el navegador que usarás para la prueba, en este caso será Chrome y presionas en la opción Satrt E2E testing in Chrome.

![image](https://user-images.githubusercontent.com/63822421/193392350-5ea07cd1-7c0a-4968-b295-54b11e98c03c.png)

- Una vez hecho esto, se abrirá el navegador donde se mostrará la ejecución, elegiremos la opción Spec y selecionaremos el Spec llamado WingoPage.

![image](https://user-images.githubusercontent.com/63822421/193392469-50d44445-6ffd-4a6b-981f-81cfd79c073c.png)

- Una vez seleccionado dicho Spec, la prueba se ejecutará automaticamente, dejando el siguiente resulltado.

![image](https://user-images.githubusercontent.com/63822421/193392521-39f576c3-5fec-442f-8067-dc65381a214c.png)




