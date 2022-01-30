const app = require("express")();
const PORT = 8080;

app.listen(PORT, () => console.log(`API initialized on PORT ${PORT}`));

app.use(express.json());

app.get("/test", (req, res) => {
	res.status(200).send({
		test: "success"
	});
})