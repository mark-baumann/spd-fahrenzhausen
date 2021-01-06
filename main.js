
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB51jLYVUGUYwPXUuXLs_Ac8PWpu0j5Gw0",
    authDomain: "spd-fahrenzhausen.firebaseapp.com",
    projectId: "spd-fahrenzhausen",
    storageBucket: "spd-fahrenzhausen.appspot.com",
    messagingSenderId: "664458616651",
    appId: "1:664458616651:web:696747cc846ba5f6e3d2ce"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  let postCollection = document.querySelector("#posts-collection");

  const db = firebase.firestore();
  
  function createPost(title, time, content) {
    let div = document.createElement("div");
    div.setAttribute("class", "col-md-4");
  
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    let small = document.createElement("small");
  
    h2.textContent = title;
    small.textContent = time;
    p.textContent = content;
  
    div.appendChild(h2);
    div.appendChild(small);
    div.appendChild(p);
  
    postCollection.appendChild(div);
  }
  
  // Get Posts
  function getPosts() {
    db.collection("posts")
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(docs => {
          createPost(
            docs.data().postName,
            docs.data().createdAt,
            docs.data().postContent
          );
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  
  getPosts();

