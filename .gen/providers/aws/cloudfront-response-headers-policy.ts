// https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudfrontResponseHeadersPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#comment CloudfrontResponseHeadersPolicy#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#etag CloudfrontResponseHeadersPolicy#etag}
  */
  readonly etag?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#name CloudfrontResponseHeadersPolicy#name}
  */
  readonly name: string;
  /**
  * cors_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#cors_config CloudfrontResponseHeadersPolicy#cors_config}
  */
  readonly corsConfig?: CloudfrontResponseHeadersPolicyCorsConfig[];
  /**
  * custom_headers_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#custom_headers_config CloudfrontResponseHeadersPolicy#custom_headers_config}
  */
  readonly customHeadersConfig?: CloudfrontResponseHeadersPolicyCustomHeadersConfig[];
  /**
  * security_headers_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#security_headers_config CloudfrontResponseHeadersPolicy#security_headers_config}
  */
  readonly securityHeadersConfig?: CloudfrontResponseHeadersPolicySecurityHeadersConfig[];
}
export interface CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#items CloudfrontResponseHeadersPolicy#items}
  */
  readonly items?: string[];
}

function cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersToTerraform(struct?: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform)(struct!.items),
  }
}

export interface CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#items CloudfrontResponseHeadersPolicy#items}
  */
  readonly items?: string[];
}

function cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsToTerraform(struct?: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform)(struct!.items),
  }
}

export interface CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#items CloudfrontResponseHeadersPolicy#items}
  */
  readonly items?: string[];
}

function cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsToTerraform(struct?: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform)(struct!.items),
  }
}

export interface CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#items CloudfrontResponseHeadersPolicy#items}
  */
  readonly items?: string[];
}

function cloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersToTerraform(struct?: CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    items: cdktf.listMapper(cdktf.stringToTerraform)(struct!.items),
  }
}

export interface CloudfrontResponseHeadersPolicyCorsConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#access_control_allow_credentials CloudfrontResponseHeadersPolicy#access_control_allow_credentials}
  */
  readonly accessControlAllowCredentials: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#access_control_max_age_sec CloudfrontResponseHeadersPolicy#access_control_max_age_sec}
  */
  readonly accessControlMaxAgeSec?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#origin_override CloudfrontResponseHeadersPolicy#origin_override}
  */
  readonly originOverride: boolean | cdktf.IResolvable;
  /**
  * access_control_allow_headers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#access_control_allow_headers CloudfrontResponseHeadersPolicy#access_control_allow_headers}
  */
  readonly accessControlAllowHeaders: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeaders[];
  /**
  * access_control_allow_methods block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#access_control_allow_methods CloudfrontResponseHeadersPolicy#access_control_allow_methods}
  */
  readonly accessControlAllowMethods: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethods[];
  /**
  * access_control_allow_origins block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#access_control_allow_origins CloudfrontResponseHeadersPolicy#access_control_allow_origins}
  */
  readonly accessControlAllowOrigins: CloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOrigins[];
  /**
  * access_control_expose_headers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#access_control_expose_headers CloudfrontResponseHeadersPolicy#access_control_expose_headers}
  */
  readonly accessControlExposeHeaders?: CloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeaders[];
}

function cloudfrontResponseHeadersPolicyCorsConfigToTerraform(struct?: CloudfrontResponseHeadersPolicyCorsConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_control_allow_credentials: cdktf.booleanToTerraform(struct!.accessControlAllowCredentials),
    access_control_max_age_sec: cdktf.numberToTerraform(struct!.accessControlMaxAgeSec),
    origin_override: cdktf.booleanToTerraform(struct!.originOverride),
    access_control_allow_headers: cdktf.listMapper(cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowHeadersToTerraform)(struct!.accessControlAllowHeaders),
    access_control_allow_methods: cdktf.listMapper(cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowMethodsToTerraform)(struct!.accessControlAllowMethods),
    access_control_allow_origins: cdktf.listMapper(cloudfrontResponseHeadersPolicyCorsConfigAccessControlAllowOriginsToTerraform)(struct!.accessControlAllowOrigins),
    access_control_expose_headers: cdktf.listMapper(cloudfrontResponseHeadersPolicyCorsConfigAccessControlExposeHeadersToTerraform)(struct!.accessControlExposeHeaders),
  }
}

export interface CloudfrontResponseHeadersPolicyCustomHeadersConfigItems {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#header CloudfrontResponseHeadersPolicy#header}
  */
  readonly header: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#override CloudfrontResponseHeadersPolicy#override}
  */
  readonly override: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#value CloudfrontResponseHeadersPolicy#value}
  */
  readonly value: string;
}

function cloudfrontResponseHeadersPolicyCustomHeadersConfigItemsToTerraform(struct?: CloudfrontResponseHeadersPolicyCustomHeadersConfigItems): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    header: cdktf.stringToTerraform(struct!.header),
    override: cdktf.booleanToTerraform(struct!.override),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export interface CloudfrontResponseHeadersPolicyCustomHeadersConfig {
  /**
  * items block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#items CloudfrontResponseHeadersPolicy#items}
  */
  readonly items?: CloudfrontResponseHeadersPolicyCustomHeadersConfigItems[];
}

function cloudfrontResponseHeadersPolicyCustomHeadersConfigToTerraform(struct?: CloudfrontResponseHeadersPolicyCustomHeadersConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    items: cdktf.listMapper(cloudfrontResponseHeadersPolicyCustomHeadersConfigItemsToTerraform)(struct!.items),
  }
}

export interface CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#content_security_policy CloudfrontResponseHeadersPolicy#content_security_policy}
  */
  readonly contentSecurityPolicy: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#override CloudfrontResponseHeadersPolicy#override}
  */
  readonly override: boolean | cdktf.IResolvable;
}

function cloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyToTerraform(struct?: CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_security_policy: cdktf.stringToTerraform(struct!.contentSecurityPolicy),
    override: cdktf.booleanToTerraform(struct!.override),
  }
}

export interface CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#override CloudfrontResponseHeadersPolicy#override}
  */
  readonly override: boolean | cdktf.IResolvable;
}

function cloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsToTerraform(struct?: CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    override: cdktf.booleanToTerraform(struct!.override),
  }
}

export interface CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#frame_option CloudfrontResponseHeadersPolicy#frame_option}
  */
  readonly frameOption: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#override CloudfrontResponseHeadersPolicy#override}
  */
  readonly override: boolean | cdktf.IResolvable;
}

function cloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsToTerraform(struct?: CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    frame_option: cdktf.stringToTerraform(struct!.frameOption),
    override: cdktf.booleanToTerraform(struct!.override),
  }
}

export interface CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#override CloudfrontResponseHeadersPolicy#override}
  */
  readonly override: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#referrer_policy CloudfrontResponseHeadersPolicy#referrer_policy}
  */
  readonly referrerPolicy: string;
}

function cloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyToTerraform(struct?: CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    override: cdktf.booleanToTerraform(struct!.override),
    referrer_policy: cdktf.stringToTerraform(struct!.referrerPolicy),
  }
}

export interface CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#access_control_max_age_sec CloudfrontResponseHeadersPolicy#access_control_max_age_sec}
  */
  readonly accessControlMaxAgeSec: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#include_subdomains CloudfrontResponseHeadersPolicy#include_subdomains}
  */
  readonly includeSubdomains?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#override CloudfrontResponseHeadersPolicy#override}
  */
  readonly override: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#preload CloudfrontResponseHeadersPolicy#preload}
  */
  readonly preload?: boolean | cdktf.IResolvable;
}

function cloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityToTerraform(struct?: CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access_control_max_age_sec: cdktf.numberToTerraform(struct!.accessControlMaxAgeSec),
    include_subdomains: cdktf.booleanToTerraform(struct!.includeSubdomains),
    override: cdktf.booleanToTerraform(struct!.override),
    preload: cdktf.booleanToTerraform(struct!.preload),
  }
}

export interface CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#mode_block CloudfrontResponseHeadersPolicy#mode_block}
  */
  readonly modeBlock?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#override CloudfrontResponseHeadersPolicy#override}
  */
  readonly override: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#protection CloudfrontResponseHeadersPolicy#protection}
  */
  readonly protection: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#report_uri CloudfrontResponseHeadersPolicy#report_uri}
  */
  readonly reportUri?: string;
}

function cloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionToTerraform(struct?: CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    mode_block: cdktf.booleanToTerraform(struct!.modeBlock),
    override: cdktf.booleanToTerraform(struct!.override),
    protection: cdktf.booleanToTerraform(struct!.protection),
    report_uri: cdktf.stringToTerraform(struct!.reportUri),
  }
}

export interface CloudfrontResponseHeadersPolicySecurityHeadersConfig {
  /**
  * content_security_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#content_security_policy CloudfrontResponseHeadersPolicy#content_security_policy}
  */
  readonly contentSecurityPolicy?: CloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicy[];
  /**
  * content_type_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#content_type_options CloudfrontResponseHeadersPolicy#content_type_options}
  */
  readonly contentTypeOptions?: CloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptions[];
  /**
  * frame_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#frame_options CloudfrontResponseHeadersPolicy#frame_options}
  */
  readonly frameOptions?: CloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptions[];
  /**
  * referrer_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#referrer_policy CloudfrontResponseHeadersPolicy#referrer_policy}
  */
  readonly referrerPolicy?: CloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicy[];
  /**
  * strict_transport_security block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#strict_transport_security CloudfrontResponseHeadersPolicy#strict_transport_security}
  */
  readonly strictTransportSecurity?: CloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurity[];
  /**
  * xss_protection block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html#xss_protection CloudfrontResponseHeadersPolicy#xss_protection}
  */
  readonly xssProtection?: CloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtection[];
}

function cloudfrontResponseHeadersPolicySecurityHeadersConfigToTerraform(struct?: CloudfrontResponseHeadersPolicySecurityHeadersConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    content_security_policy: cdktf.listMapper(cloudfrontResponseHeadersPolicySecurityHeadersConfigContentSecurityPolicyToTerraform)(struct!.contentSecurityPolicy),
    content_type_options: cdktf.listMapper(cloudfrontResponseHeadersPolicySecurityHeadersConfigContentTypeOptionsToTerraform)(struct!.contentTypeOptions),
    frame_options: cdktf.listMapper(cloudfrontResponseHeadersPolicySecurityHeadersConfigFrameOptionsToTerraform)(struct!.frameOptions),
    referrer_policy: cdktf.listMapper(cloudfrontResponseHeadersPolicySecurityHeadersConfigReferrerPolicyToTerraform)(struct!.referrerPolicy),
    strict_transport_security: cdktf.listMapper(cloudfrontResponseHeadersPolicySecurityHeadersConfigStrictTransportSecurityToTerraform)(struct!.strictTransportSecurity),
    xss_protection: cdktf.listMapper(cloudfrontResponseHeadersPolicySecurityHeadersConfigXssProtectionToTerraform)(struct!.xssProtection),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html aws_cloudfront_response_headers_policy}
*/
export class CloudfrontResponseHeadersPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_cloudfront_response_headers_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_response_headers_policy.html aws_cloudfront_response_headers_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudfrontResponseHeadersPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: CloudfrontResponseHeadersPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_cloudfront_response_headers_policy',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._comment = config.comment;
    this._etag = config.etag;
    this._name = config.name;
    this._corsConfig = config.corsConfig;
    this._customHeadersConfig = config.customHeadersConfig;
    this._securityHeadersConfig = config.securityHeadersConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: false, optional: true, required: false
  private _comment?: string;
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string ) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment
  }

  // etag - computed: true, optional: true, required: false
  private _etag?: string;
  public get etag() {
    return this.getStringAttribute('etag');
  }
  public set etag(value: string) {
    this._etag = value;
  }
  public resetEtag() {
    this._etag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etagInput() {
    return this._etag
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // cors_config - computed: false, optional: true, required: false
  private _corsConfig?: CloudfrontResponseHeadersPolicyCorsConfig[];
  public get corsConfig() {
    return this.interpolationForAttribute('cors_config') as any;
  }
  public set corsConfig(value: CloudfrontResponseHeadersPolicyCorsConfig[] ) {
    this._corsConfig = value;
  }
  public resetCorsConfig() {
    this._corsConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsConfigInput() {
    return this._corsConfig
  }

  // custom_headers_config - computed: false, optional: true, required: false
  private _customHeadersConfig?: CloudfrontResponseHeadersPolicyCustomHeadersConfig[];
  public get customHeadersConfig() {
    return this.interpolationForAttribute('custom_headers_config') as any;
  }
  public set customHeadersConfig(value: CloudfrontResponseHeadersPolicyCustomHeadersConfig[] ) {
    this._customHeadersConfig = value;
  }
  public resetCustomHeadersConfig() {
    this._customHeadersConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHeadersConfigInput() {
    return this._customHeadersConfig
  }

  // security_headers_config - computed: false, optional: true, required: false
  private _securityHeadersConfig?: CloudfrontResponseHeadersPolicySecurityHeadersConfig[];
  public get securityHeadersConfig() {
    return this.interpolationForAttribute('security_headers_config') as any;
  }
  public set securityHeadersConfig(value: CloudfrontResponseHeadersPolicySecurityHeadersConfig[] ) {
    this._securityHeadersConfig = value;
  }
  public resetSecurityHeadersConfig() {
    this._securityHeadersConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityHeadersConfigInput() {
    return this._securityHeadersConfig
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      etag: cdktf.stringToTerraform(this._etag),
      name: cdktf.stringToTerraform(this._name),
      cors_config: cdktf.listMapper(cloudfrontResponseHeadersPolicyCorsConfigToTerraform)(this._corsConfig),
      custom_headers_config: cdktf.listMapper(cloudfrontResponseHeadersPolicyCustomHeadersConfigToTerraform)(this._customHeadersConfig),
      security_headers_config: cdktf.listMapper(cloudfrontResponseHeadersPolicySecurityHeadersConfigToTerraform)(this._securityHeadersConfig),
    };
  }
}
