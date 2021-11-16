"use strict";
// https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret.html
// generated from terraform resource schema
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.SecretsmanagerSecret = void 0;
var cdktf = require("cdktf");
function secretsmanagerSecretReplicaToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        kms_key_id: cdktf.stringToTerraform(struct.kmsKeyId),
        region: cdktf.stringToTerraform(struct.region)
    };
}
function secretsmanagerSecretRotationRulesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        automatically_after_days: cdktf.numberToTerraform(struct.automaticallyAfterDays)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret.html aws_secretsmanager_secret}
*/
var SecretsmanagerSecret = /** @class */ (function (_super) {
    __extends(SecretsmanagerSecret, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/secretsmanager_secret.html aws_secretsmanager_secret} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecretsmanagerSecretConfig = {}
    */
    function SecretsmanagerSecret(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_secretsmanager_secret',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._description = config.description;
        _this._forceOverwriteReplicaSecret = config.forceOverwriteReplicaSecret;
        _this._kmsKeyId = config.kmsKeyId;
        _this._name = config.name;
        _this._namePrefix = config.namePrefix;
        _this._policy = config.policy;
        _this._recoveryWindowInDays = config.recoveryWindowInDays;
        _this._rotationLambdaArn = config.rotationLambdaArn;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._replica = config.replica;
        _this._rotationRules = config.rotationRules;
        return _this;
    }
    Object.defineProperty(SecretsmanagerSecret.prototype, "arn", {
        // ==========
        // ATTRIBUTES
        // ==========
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretsmanagerSecret.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretsmanagerSecret.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(SecretsmanagerSecret.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretsmanagerSecret.prototype, "forceOverwriteReplicaSecret", {
        get: function () {
            return this.getBooleanAttribute('force_overwrite_replica_secret');
        },
        set: function (value) {
            this._forceOverwriteReplicaSecret = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretsmanagerSecret.prototype.resetForceOverwriteReplicaSecret = function () {
        this._forceOverwriteReplicaSecret = undefined;
    };
    Object.defineProperty(SecretsmanagerSecret.prototype, "forceOverwriteReplicaSecretInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._forceOverwriteReplicaSecret;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretsmanagerSecret.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretsmanagerSecret.prototype, "kmsKeyId", {
        get: function () {
            return this.getStringAttribute('kms_key_id');
        },
        set: function (value) {
            this._kmsKeyId = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretsmanagerSecret.prototype.resetKmsKeyId = function () {
        this._kmsKeyId = undefined;
    };
    Object.defineProperty(SecretsmanagerSecret.prototype, "kmsKeyIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kmsKeyId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretsmanagerSecret.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretsmanagerSecret.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(SecretsmanagerSecret.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretsmanagerSecret.prototype, "namePrefix", {
        get: function () {
            return this.getStringAttribute('name_prefix');
        },
        set: function (value) {
            this._namePrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretsmanagerSecret.prototype.resetNamePrefix = function () {
        this._namePrefix = undefined;
    };
    Object.defineProperty(SecretsmanagerSecret.prototype, "namePrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._namePrefix;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretsmanagerSecret.prototype, "policy", {
        get: function () {
            return this.getStringAttribute('policy');
        },
        set: function (value) {
            this._policy = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretsmanagerSecret.prototype.resetPolicy = function () {
        this._policy = undefined;
    };
    Object.defineProperty(SecretsmanagerSecret.prototype, "policyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._policy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretsmanagerSecret.prototype, "recoveryWindowInDays", {
        get: function () {
            return this.getNumberAttribute('recovery_window_in_days');
        },
        set: function (value) {
            this._recoveryWindowInDays = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretsmanagerSecret.prototype.resetRecoveryWindowInDays = function () {
        this._recoveryWindowInDays = undefined;
    };
    Object.defineProperty(SecretsmanagerSecret.prototype, "recoveryWindowInDaysInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._recoveryWindowInDays;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretsmanagerSecret.prototype, "rotationEnabled", {
        // rotation_enabled - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('rotation_enabled');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretsmanagerSecret.prototype, "rotationLambdaArn", {
        get: function () {
            return this.getStringAttribute('rotation_lambda_arn');
        },
        set: function (value) {
            this._rotationLambdaArn = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretsmanagerSecret.prototype.resetRotationLambdaArn = function () {
        this._rotationLambdaArn = undefined;
    };
    Object.defineProperty(SecretsmanagerSecret.prototype, "rotationLambdaArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rotationLambdaArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretsmanagerSecret.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretsmanagerSecret.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(SecretsmanagerSecret.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretsmanagerSecret.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretsmanagerSecret.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(SecretsmanagerSecret.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretsmanagerSecret.prototype, "replica", {
        get: function () {
            return this.interpolationForAttribute('replica');
        },
        set: function (value) {
            this._replica = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretsmanagerSecret.prototype.resetReplica = function () {
        this._replica = undefined;
    };
    Object.defineProperty(SecretsmanagerSecret.prototype, "replicaInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._replica;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretsmanagerSecret.prototype, "rotationRules", {
        get: function () {
            return this.interpolationForAttribute('rotation_rules');
        },
        set: function (value) {
            this._rotationRules = value;
        },
        enumerable: false,
        configurable: true
    });
    SecretsmanagerSecret.prototype.resetRotationRules = function () {
        this._rotationRules = undefined;
    };
    Object.defineProperty(SecretsmanagerSecret.prototype, "rotationRulesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._rotationRules;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SecretsmanagerSecret.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            force_overwrite_replica_secret: cdktf.booleanToTerraform(this._forceOverwriteReplicaSecret),
            kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
            name: cdktf.stringToTerraform(this._name),
            name_prefix: cdktf.stringToTerraform(this._namePrefix),
            policy: cdktf.stringToTerraform(this._policy),
            recovery_window_in_days: cdktf.numberToTerraform(this._recoveryWindowInDays),
            rotation_lambda_arn: cdktf.stringToTerraform(this._rotationLambdaArn),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            replica: cdktf.listMapper(secretsmanagerSecretReplicaToTerraform)(this._replica),
            rotation_rules: cdktf.listMapper(secretsmanagerSecretRotationRulesToTerraform)(this._rotationRules)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SecretsmanagerSecret.tfResourceType = "aws_secretsmanager_secret";
    return SecretsmanagerSecret;
}(cdktf.TerraformResource));
exports.SecretsmanagerSecret = SecretsmanagerSecret;
