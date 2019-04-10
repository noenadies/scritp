	
  firebase.database().ref().child("canales").child(soyelcanal).once("value", function(snapshot) {

    arraycanalestesoy=snapshot.val();
    console.log(arraycanalestesoy);


document.getElementById("idedtced").value=arraycanalestesoy.fcedula;
document.getElementById("idedtdep").value=arraycanalestesoy.fdep;
document.getElementById("idedtmun").value=arraycanalestesoy.fmuni;
document.getElementById("idedtpt").value=arraycanalestesoy.fpuesto;
document.getElementById("idedtdr").value=arraycanalestesoy.fdir;
document.getElementById("idedtmesa").value=arraycanalestesoy.fmesa;
document.getElementById("idedtfch").value=arraycanalestesoy.ffecha;
document.getElementById("idedtfch").value=arraycanalestesoy.ffecha;

    }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
    });

  }



