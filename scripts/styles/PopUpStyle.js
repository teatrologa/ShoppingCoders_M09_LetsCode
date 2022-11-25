(() => {
    const style = document.createElement('style');
    style.innerHTML = `
    .mainContainer {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        /* margin-top: 10vh; */
        padding-top: 10vh;
      }
      
      .popUpContainer {
        background-color: rgba(0, 0, 0, .5);
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0px;
        left: 0px;
        display: none;
        justify-content: center;
        align-items: center;
      }
      
      .show {
        display: flex;
      }
      
      .hide {
        display: none;
      }
      
      .infoPopUp {
        background-color: #F1F1F1;
        display: flex;
        justify-content: space-between;
        width: 60%;
        min-width: 300px;
        max-width: 800px;
        padding: 4%;
      }
      
      .storeInfo {
        height: 100%;
        margin-right: 3%;
      }
      
      .storeInfo h2 {
        font-size: 3rem;
        font-weight: bolder;
      }
      
      .storeInfo h3 {
        margin-top: 3%;
        margin-bottom: 2%;
        font-size: 1.2rem;
        color: darkgoldenrod;
      }
      
      .storeInfo p {
        color: #484D52;
        font-size: 1.1rem;
        line-height: 1.5;
        margin-bottom: -0.5%;
      }
      
      .divButtons {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: center;
        margin-left: 3%;
        width: 13%;
      }
      
      #boxclose {
        position: relative;
      }
      
      #close {
        padding: 5px;
        font-weight: bolder;
        background-color: lightgray;
        color: #484D52;
        border: 2px solid #F1F1F1;
        cursor: pointer;
      
        width: 40px;
        border-radius: 10px;
        top: 0;
        right: 0;
      
        position: absolute;
        /* width: 50px;
        height: 50px;
        font-size: 1rem;
        border-radius: 50%;
        top: -60px;
        right: -90%; */
      
      }
      
      #edit {
        width: 100%;
        height: 4vh;
        padding: 4px 7px;
        font-weight: bolder;
        background-color:#189AB4;
        color: #F1F1F1;
        border-radius: 10px;
        border: none;
        cursor: pointer;
      }
      
      .formPopUp {
        background-color: #F1F1F1;
        display: none;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 60%;
        min-width: 300px;
        max-width: 800px;
        padding: 4%;
        position: relative;
      }
      
      #divClose {
        position: absolute;
        top: 20px;
        right: 20px;
      }
      
      .formPopUp form {
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 2% 0;
      
      }
      
      .formPopUp form input,
      form select {
        font-size: 15px;
        margin: 10px 0;
        height: 5vh;
        border-radius: 1.3rem;
        border: none;
        padding-left: 20px;
      }
      
      .formPopUp form textarea {
        font-size: 15px;
        font-family: sans-serif;
        margin: 10px 0;
        height: 7vh;
        border-radius: 1.3rem;
        border: none;
        padding-top: 10px;
        padding-left: 20px;
      }
      
      #form {
        width: 100%;
        display: flex;
      }
      
      #divSave {
          width: 80%;
          height: 5vh;
          margin-bottom: 2%;
      }
      
      #divButtons {
        display: flex;
        justify-content:space-between;
        flex-direction: row;
        width: 80%;
        height: 5vh;
      }
      
      #boxsave {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
      
      }
      
      #boxdelete {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
      }
      
      #save {
        width: 99%;
        height: 100%;
        font-size: 15px;
        border-radius: 20px;
        border: none;
        background-color: #189AB4;
        color: white;
      }
      
      #delete {
        width: 99%;
        font-size: 15px;
        height: 5vh;
        border-radius: 10px;
        border: none;
        background-color: darkgray;
        color: white;
      }      
    `;
    document.body.appendChild(style);
})();

