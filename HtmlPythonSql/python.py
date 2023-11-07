from flask import Flask

app = Flask(__name__)

#Criando a primeira pagina do site
#route -> sitedoandrey.com/
#função -> oq você quer exibirr naquela página

@app.route("/")
def homepage():
    return "Esse é o meu primeiro site em python"

@app.route('/contatos')
def contatos():
    return "<p>Nossos contatos <br>são bla bla bla</p>"
#Colocando o site no ar
if __name__ == "__main__":
    app.run(debug=True)