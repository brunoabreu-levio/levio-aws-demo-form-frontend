resource "aws_s3_bucket" "levio-aws-demo-form-front" {
  bucket = var.bucket_name
}

resource "aws_s3_bucket_policy" "bucket-policy" {
  bucket = aws_s3_bucket.levio-aws-demo-form-front.bucket
  policy = data.aws_iam_policy_document.iam_policy_document.json
}

data "aws_iam_policy_document" "iam_policy_document" {
  statement {
    sid    = "AllowPublicRead"
    effect = "Allow"
    resources = [
      "arn:aws:s3:::${var.bucket_name}",
      "arn:aws:s3:::${var.bucket_name}/*",
    ]
    actions = ["S3:GetObject"]
    principals {
      type        = "*"
      identifiers = ["*"]
    }
  }
}

#resource "aws_s3_bucket_policy" "s3_bucket_policy" {
#  bucket = aws_s3_bucket.levio-aws-demo-form-front.bucket
#
#  policy = jsonencode({
#    Version   = "2012-10-17"
#    Statement = [
#      {
#        Action    = ["s3:GetObject"]
#        Effect    = "Allow"
#        Resource  = ["arn:aws:s3:::${var.bucket_name}/*"]
#        Principal = "*"
#      },
#    ]
#  })
#}

resource "aws_s3_bucket_ownership_controls" "s3_bucket_ownership_controls" {
  bucket = aws_s3_bucket.levio-aws-demo-form-front.id
  rule {
    object_ownership = "BucketOwnerEnforced"
  }
}

resource "aws_s3_bucket_public_access_block" "s3_bucket_public_access_block" {
  bucket = aws_s3_bucket.levio-aws-demo-form-front.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

resource "aws_s3_bucket_website_configuration" "s3_bucket_website_configuration" {
  bucket = aws_s3_bucket.levio-aws-demo-form-front.id

  index_document {
    suffix = "index.html"
  }
}