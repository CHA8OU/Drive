function hello(){
    alert('Bonjour, et bienvenue cher visiteur .');
}

function controleMotdepasse(m) {
    
    if (m.value.length < 10 ) {
         alert("Le mot de passe doit contenir au moins 10 caractères .");
         m.focus();
         return false;
    } else if(m.value.substring(0,1)!=m.value.substring(0,1).toUpperCase()){
        alert("la premiere caractére doit être majuscule .");
        m.focus();
        return false;
    } 
        return true;
    }


    function inscri(m1, m2, c1, c2 , n1 , n2) {
        
        if (!controleMotdepasse(m1)) {
            m1.focus();
         return false;
        } else if (!controleMotdepasse(m2)) {
            m2.focus();
            return false;
        } else if (m1.value !== m2.value) {
             alert("Mots de passe différents");
             m1.focus();
             return false;
        } else if (!c1.checked && !c2.checked) {
             alert("Il faut accepter les termes et les conditions .");
             c1.focus();
             return false;
        } else if (n1.value.length<2){
             alert("Le nom doit être supérieure à 2");
             c1.focus();
             return false;
      }else if (n2.value.length<2){
             alert("Le prénom doit être supérieure à 2");
             n2.focus();
             return false;
      }
            
}



  