from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from prometheus_fastapi_instrumentator import Instrumentator

app = FastAPI()

app.mount("/css", StaticFiles(directory="frontend/css"), name="css")
app.mount("/js", StaticFiles(directory="frontend/js"), name="js")
app.mount("/img", StaticFiles(directory="frontend/img"), name="img")
app.mount("/frontend", StaticFiles(directory="frontend"), name="frontend")

# fastapi GET /metircs 구성
# instrument(app) : Fastapi의 모든 요청을 가로채서(metrics 수집) - middleware 같은 역할
# expose(app) : /metrics 엔드포인트를 구성
Instrumentator().instrument(app).expose(app)

@app.get("/")
def home():
    return FileResponse("frontend/index.html")

@app.get("/product")
def product_page():
    return FileResponse("frontend/product.html")

@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}


# | 서비스      | URL                                                            |
# | ---------- | -------------------------------------------------------------- |
# | FastAPI    | [http://localhost:8000](http://localhost:8000)                 |
# | Swagger    | [http://localhost:8000/docs](http://localhost:8000/docs)       |
# | Metrics    | [http://localhost:8000/metrics](http://localhost:8000/metrics) |
# | Prometheus | [http://localhost:9090](http://localhost:9090)                 |
# | Grafana    | [http://localhost:3000](http://localhost:3000)                 |
# | MySQL      | localhost:3306                                                 |
