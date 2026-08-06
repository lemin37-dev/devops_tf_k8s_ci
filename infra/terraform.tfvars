aws_region   = "ap-northeast-1"
project_name = "de-ai-19-devops-tf-eks-auto"
environment  = "dev"

kubernetes_version = "1.35"

# 운영 환경에서는 반드시 본인/회사 공인 IP만 허용
cluster_endpoint_public_access_cidrs = ["0.0.0.0/0"]

additional_admin_role_arns = []

# 비용을 더 낮추려면 Single-AZ로 변경할 수 있지만 현재는 v2와 동일한 Multi-AZ 효과를 유지
db_instance_class    = "db.t3.micro"
db_allocated_storage = 20

# ------------------------------------------------------------
# GitHub Actions CI
# ------------------------------------------------------------
enable_github_actions_ci    = true
github_owner                = "lemin37-dev"      # Github reoo owner
github_ci_repository        = "devops_tf_k8s_ci" # Github repo title
github_ci_branch            = "main"             # ECR push 인증 허가할 branch
create_github_oidc_provider = false              # 최초일때는 true, 만약 2번 이상 수행일 경우 false
# 조회발급
github_owner_id         = "298081278"
github_ci_repository_id = "1324585084"