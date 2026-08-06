# 목표
- CI Workflow 구성
    ```
    # 소스 변경 -> push -> Github Actions -> 이미지 생성 -> 임시인증(OIDC) -> ECR 업데이트
    # 최초 1회 인프라 구성(terrafrom) -> 변경 시 반영됨
    devops_tf_k8s_ci -> Github Actions -> AWS ECR
    ```
- 지금까지 구성한 인프라(테라폼)와 플랫폼/서비스(쿠버네티스) 위에 Devops 올려서 완성

- 세부적인 workflow
    ```
            개발자 Push
            │
            ▼
        GitHub Actions
            │
            ├─ Terraform fmt / validate / apply
            ├─ WEB Docker 이미지 빌드
            ├─ WEB /health 테스트
            ├─ WAS Python 문법 검사
            ├─ WAS Docker 이미지 빌드
            ├─ WAS /health 테스트
            ├─ GitHub OIDC로 AWS 임시 인증
            ├─ WEB 이미지 ECR Push
            ├─ WAS 이미지 ECR Push
            └─ ECR 이미지 등록 확인

    ```