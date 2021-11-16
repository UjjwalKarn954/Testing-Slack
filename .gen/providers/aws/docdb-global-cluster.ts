// https://www.terraform.io/docs/providers/aws/r/docdb_global_cluster.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DocdbGlobalClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_global_cluster.html#database_name DocdbGlobalCluster#database_name}
  */
  readonly databaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_global_cluster.html#deletion_protection DocdbGlobalCluster#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_global_cluster.html#engine DocdbGlobalCluster#engine}
  */
  readonly engine?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_global_cluster.html#engine_version DocdbGlobalCluster#engine_version}
  */
  readonly engineVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_global_cluster.html#global_cluster_identifier DocdbGlobalCluster#global_cluster_identifier}
  */
  readonly globalClusterIdentifier: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_global_cluster.html#source_db_cluster_identifier DocdbGlobalCluster#source_db_cluster_identifier}
  */
  readonly sourceDbClusterIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_global_cluster.html#storage_encrypted DocdbGlobalCluster#storage_encrypted}
  */
  readonly storageEncrypted?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_global_cluster.html#timeouts DocdbGlobalCluster#timeouts}
  */
  readonly timeouts?: DocdbGlobalClusterTimeouts;
}
export class DocdbGlobalClusterGlobalClusterMembers extends cdktf.ComplexComputedList {

  // db_cluster_arn - computed: true, optional: false, required: false
  public get dbClusterArn() {
    return this.getStringAttribute('db_cluster_arn');
  }

  // is_writer - computed: true, optional: false, required: false
  public get isWriter() {
    return this.getBooleanAttribute('is_writer');
  }
}
export interface DocdbGlobalClusterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_global_cluster.html#create DocdbGlobalCluster#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_global_cluster.html#delete DocdbGlobalCluster#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/docdb_global_cluster.html#update DocdbGlobalCluster#update}
  */
  readonly update?: string;
}

function docdbGlobalClusterTimeoutsToTerraform(struct?: DocdbGlobalClusterTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/docdb_global_cluster.html aws_docdb_global_cluster}
*/
export class DocdbGlobalCluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "aws_docdb_global_cluster";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/docdb_global_cluster.html aws_docdb_global_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DocdbGlobalClusterConfig
  */
  public constructor(scope: Construct, id: string, config: DocdbGlobalClusterConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_docdb_global_cluster',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._databaseName = config.databaseName;
    this._deletionProtection = config.deletionProtection;
    this._engine = config.engine;
    this._engineVersion = config.engineVersion;
    this._globalClusterIdentifier = config.globalClusterIdentifier;
    this._sourceDbClusterIdentifier = config.sourceDbClusterIdentifier;
    this._storageEncrypted = config.storageEncrypted;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string;
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string ) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName
  }

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable;
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable ) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection
  }

  // engine - computed: true, optional: true, required: false
  private _engine?: string;
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
  }
  public resetEngine() {
    this._engine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine
  }

  // engine_version - computed: true, optional: true, required: false
  private _engineVersion?: string;
  public get engineVersion() {
    return this.getStringAttribute('engine_version');
  }
  public set engineVersion(value: string) {
    this._engineVersion = value;
  }
  public resetEngineVersion() {
    this._engineVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineVersionInput() {
    return this._engineVersion
  }

  // global_cluster_identifier - computed: false, optional: false, required: true
  private _globalClusterIdentifier: string;
  public get globalClusterIdentifier() {
    return this.getStringAttribute('global_cluster_identifier');
  }
  public set globalClusterIdentifier(value: string) {
    this._globalClusterIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalClusterIdentifierInput() {
    return this._globalClusterIdentifier
  }

  // global_cluster_members - computed: true, optional: false, required: false
  public globalClusterMembers(index: string) {
    return new DocdbGlobalClusterGlobalClusterMembers(this, 'global_cluster_members', index);
  }

  // global_cluster_resource_id - computed: true, optional: false, required: false
  public get globalClusterResourceId() {
    return this.getStringAttribute('global_cluster_resource_id');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // source_db_cluster_identifier - computed: true, optional: true, required: false
  private _sourceDbClusterIdentifier?: string;
  public get sourceDbClusterIdentifier() {
    return this.getStringAttribute('source_db_cluster_identifier');
  }
  public set sourceDbClusterIdentifier(value: string) {
    this._sourceDbClusterIdentifier = value;
  }
  public resetSourceDbClusterIdentifier() {
    this._sourceDbClusterIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDbClusterIdentifierInput() {
    return this._sourceDbClusterIdentifier
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // storage_encrypted - computed: true, optional: true, required: false
  private _storageEncrypted?: boolean | cdktf.IResolvable;
  public get storageEncrypted() {
    return this.getBooleanAttribute('storage_encrypted');
  }
  public set storageEncrypted(value: boolean | cdktf.IResolvable) {
    this._storageEncrypted = value;
  }
  public resetStorageEncrypted() {
    this._storageEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageEncryptedInput() {
    return this._storageEncrypted
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DocdbGlobalClusterTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DocdbGlobalClusterTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      database_name: cdktf.stringToTerraform(this._databaseName),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      engine: cdktf.stringToTerraform(this._engine),
      engine_version: cdktf.stringToTerraform(this._engineVersion),
      global_cluster_identifier: cdktf.stringToTerraform(this._globalClusterIdentifier),
      source_db_cluster_identifier: cdktf.stringToTerraform(this._sourceDbClusterIdentifier),
      storage_encrypted: cdktf.booleanToTerraform(this._storageEncrypted),
      timeouts: docdbGlobalClusterTimeoutsToTerraform(this._timeouts),
    };
  }
}
