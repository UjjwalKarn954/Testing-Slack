// https://www.terraform.io/docs/providers/aws/r/sagemaker_code_repository.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SagemakerCodeRepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_code_repository.html#code_repository_name SagemakerCodeRepository#code_repository_name}
  */
  readonly codeRepositoryName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_code_repository.html#tags SagemakerCodeRepository#tags}
  */
  readonly tags?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_code_repository.html#tags_all SagemakerCodeRepository#tags_all}
  */
  readonly tagsAll?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * git_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_code_repository.html#git_config SagemakerCodeRepository#git_config}
  */
  readonly gitConfig: SagemakerCodeRepositoryGitConfig[];
}
export interface SagemakerCodeRepositoryGitConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_code_repository.html#branch SagemakerCodeRepository#branch}
  */
  readonly branch?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_code_repository.html#repository_url SagemakerCodeRepository#repository_url}
  */
  readonly repositoryUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_code_repository.html#secret_arn SagemakerCodeRepository#secret_arn}
  */
  readonly secretArn?: string;
}

function sagemakerCodeRepositoryGitConfigToTerraform(struct?: SagemakerCodeRepositoryGitConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    branch: cdktf.stringToTerraform(struct!.branch),
    repository_url: cdktf.stringToTerraform(struct!.repositoryUrl),
    secret_arn: cdktf.stringToTerraform(struct!.secretArn),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_code_repository.html aws_sagemaker_code_repository}
*/
export class SagemakerCodeRepository extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_sagemaker_code_repository";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_code_repository.html aws_sagemaker_code_repository} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SagemakerCodeRepositoryConfig
  */
  public constructor(scope: Construct, id: string, config: SagemakerCodeRepositoryConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_sagemaker_code_repository',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._codeRepositoryName = config.codeRepositoryName;
    this._tags = config.tags;
    this._tagsAll = config.tagsAll;
    this._gitConfig = config.gitConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // code_repository_name - computed: false, optional: false, required: true
  private _codeRepositoryName: string;
  public get codeRepositoryName() {
    return this.getStringAttribute('code_repository_name');
  }
  public set codeRepositoryName(value: string) {
    this._codeRepositoryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRepositoryNameInput() {
    return this._codeRepositoryName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string } | cdktf.IResolvable;
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // tags_all - computed: true, optional: true, required: false
  private _tagsAll?: { [key: string]: string } | cdktf.IResolvable
  public get tagsAll(): { [key: string]: string } | cdktf.IResolvable {
    return this.interpolationForAttribute('tags_all') as any; // Getting the computed value is not yet implemented
  }
  public set tagsAll(value: { [key: string]: string } | cdktf.IResolvable) {
    this._tagsAll = value;
  }
  public resetTagsAll() {
    this._tagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsAllInput() {
    return this._tagsAll
  }

  // git_config - computed: false, optional: false, required: true
  private _gitConfig: SagemakerCodeRepositoryGitConfig[];
  public get gitConfig() {
    return this.interpolationForAttribute('git_config') as any;
  }
  public set gitConfig(value: SagemakerCodeRepositoryGitConfig[]) {
    this._gitConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gitConfigInput() {
    return this._gitConfig
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      code_repository_name: cdktf.stringToTerraform(this._codeRepositoryName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
      git_config: cdktf.listMapper(sagemakerCodeRepositoryGitConfigToTerraform)(this._gitConfig),
    };
  }
}
