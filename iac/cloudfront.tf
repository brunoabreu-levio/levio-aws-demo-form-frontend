locals {
  s3_origin_id = aws_s3_bucket_website_configuration.s3_bucket_website_configuration.website_endpoint
}

resource "aws_cloudfront_distribution" "cloudfront_distribution" {
  origin {
    domain_name              = aws_s3_bucket.levio-aws-demo-form-front.bucket_regional_domain_name
    #    domain_name = aws_s3_bucket_website_configuration.s3_bucket_website_configuration.website_endpoint
    origin_access_control_id = aws_cloudfront_origin_access_control.cloudfront_origin_access_control.id
    origin_id                = local.s3_origin_id
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  default_cache_behavior {
    cache_policy_id  = "658327ea-f89d-4fab-a63d-7e88639e58f6"
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = local.s3_origin_id

    #    forwarded_values {
    #      query_string = false
    #
    #      cookies {
    #        forward = "none"
    #      }
    #    }

    viewer_protocol_policy = "redirect-to-https"
    #    min_ttl                = 0
    #    default_ttl            = 3600
    #    max_ttl                = 86400
  }

  price_class = "PriceClass_All"

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = true
  }
}

resource "aws_cloudfront_origin_access_control" "cloudfront_origin_access_control" {
  name                              = "${var.bucket_name}_cloudfront_origin_access_control"
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}