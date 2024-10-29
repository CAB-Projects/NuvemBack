import express from 'express';

const app=express();
const PORT = 8000;

app.get('api/test',(req, res) => {
	try{
		res.json({message:'Conexão com o backend está funcionando'});
	}catch(error){
		re.status(500).json({error:'Erro no servidor'});
	}
})

app.listen(PORT,()=>{
	console.log("Servidor rodando em http://192.168.17.3:${PORT}");
})
