variable "bucket_name" {
  description = "The name of the Bucket."
  type        = string
}

variable "aws_region" {
  description = "The AWS region where resources will be created"
  type        = string
  default     = "us-west-2"
}