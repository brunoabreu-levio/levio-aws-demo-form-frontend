terraform {
  backend "s3" {
    bucket = "levio-aws-demo-form-frontend-terraform"
    key    = "terraform.tfstate"
    region = "us-west-2"
  }
}

provider "aws" {
  region = var.aws_region
}