"use strict";
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
exports.CodePipeline = void 0;
var cdktf = require("cdktf");
/**
* AWS CodePipeline
*/
var CodePipeline;
(function (CodePipeline) {
    function codepipelineArtifactStoreEncryptionKeyToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            id: cdktf.stringToTerraform(struct.id),
            type: cdktf.stringToTerraform(struct.type)
        };
    }
    var CodepipelineArtifactStoreEncryptionKeyOutputReference = /** @class */ (function (_super) {
        __extends(CodepipelineArtifactStoreEncryptionKeyOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function CodepipelineArtifactStoreEncryptionKeyOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(CodepipelineArtifactStoreEncryptionKeyOutputReference.prototype, "id", {
            get: function () {
                return this.getStringAttribute('id');
            },
            set: function (value) {
                this._id = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CodepipelineArtifactStoreEncryptionKeyOutputReference.prototype, "idInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._id;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CodepipelineArtifactStoreEncryptionKeyOutputReference.prototype, "type", {
            get: function () {
                return this.getStringAttribute('type');
            },
            set: function (value) {
                this._type = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CodepipelineArtifactStoreEncryptionKeyOutputReference.prototype, "typeInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._type;
            },
            enumerable: false,
            configurable: true
        });
        return CodepipelineArtifactStoreEncryptionKeyOutputReference;
    }(cdktf.ComplexObject));
    CodePipeline.CodepipelineArtifactStoreEncryptionKeyOutputReference = CodepipelineArtifactStoreEncryptionKeyOutputReference;
    function codepipelineArtifactStoreToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            location: cdktf.stringToTerraform(struct.location),
            region: cdktf.stringToTerraform(struct.region),
            type: cdktf.stringToTerraform(struct.type),
            encryption_key: codepipelineArtifactStoreEncryptionKeyToTerraform(struct.encryptionKey)
        };
    }
    function codepipelineStageActionToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            category: cdktf.stringToTerraform(struct.category),
            configuration: cdktf.hashMapper(cdktf.anyToTerraform)(struct.configuration),
            input_artifacts: cdktf.listMapper(cdktf.stringToTerraform)(struct.inputArtifacts),
            name: cdktf.stringToTerraform(struct.name),
            namespace: cdktf.stringToTerraform(struct.namespace),
            output_artifacts: cdktf.listMapper(cdktf.stringToTerraform)(struct.outputArtifacts),
            owner: cdktf.stringToTerraform(struct.owner),
            provider: cdktf.stringToTerraform(struct.provider),
            region: cdktf.stringToTerraform(struct.region),
            role_arn: cdktf.stringToTerraform(struct.roleArn),
            run_order: cdktf.numberToTerraform(struct.runOrder),
            version: cdktf.stringToTerraform(struct.version)
        };
    }
    function codepipelineStageToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            name: cdktf.stringToTerraform(struct.name),
            action: cdktf.listMapper(codepipelineStageActionToTerraform)(struct.action)
        };
    }
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html aws_codepipeline}
    */
    var Codepipeline = /** @class */ (function (_super) {
        __extends(Codepipeline, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codepipeline.html aws_codepipeline} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options CodepipelineConfig
        */
        function Codepipeline(scope, id, config) {
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_codepipeline',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this._name = config.name;
            _this._roleArn = config.roleArn;
            _this._tags = config.tags;
            _this._tagsAll = config.tagsAll;
            _this._artifactStore = config.artifactStore;
            _this._stage = config.stage;
            return _this;
        }
        Object.defineProperty(Codepipeline.prototype, "arn", {
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
        Object.defineProperty(Codepipeline.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Codepipeline.prototype, "name", {
            get: function () {
                return this.getStringAttribute('name');
            },
            set: function (value) {
                this._name = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Codepipeline.prototype, "nameInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._name;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Codepipeline.prototype, "roleArn", {
            get: function () {
                return this.getStringAttribute('role_arn');
            },
            set: function (value) {
                this._roleArn = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Codepipeline.prototype, "roleArnInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._roleArn;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Codepipeline.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        Codepipeline.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(Codepipeline.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Codepipeline.prototype, "tagsAll", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags_all');
            },
            set: function (value) {
                this._tagsAll = value;
            },
            enumerable: false,
            configurable: true
        });
        Codepipeline.prototype.resetTagsAll = function () {
            this._tagsAll = undefined;
        };
        Object.defineProperty(Codepipeline.prototype, "tagsAllInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tagsAll;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Codepipeline.prototype, "artifactStore", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('artifact_store');
            },
            set: function (value) {
                this._artifactStore = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Codepipeline.prototype, "artifactStoreInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._artifactStore;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Codepipeline.prototype, "stage", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('stage');
            },
            set: function (value) {
                this._stage = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Codepipeline.prototype, "stageInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._stage;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        Codepipeline.prototype.synthesizeAttributes = function () {
            return {
                name: cdktf.stringToTerraform(this._name),
                role_arn: cdktf.stringToTerraform(this._roleArn),
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
                tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
                artifact_store: cdktf.listMapper(codepipelineArtifactStoreToTerraform)(this._artifactStore),
                stage: cdktf.listMapper(codepipelineStageToTerraform)(this._stage)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        Codepipeline.tfResourceType = "aws_codepipeline";
        return Codepipeline;
    }(cdktf.TerraformResource));
    CodePipeline.Codepipeline = Codepipeline;
    function codepipelineWebhookAuthenticationConfigurationToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            allowed_ip_range: cdktf.stringToTerraform(struct.allowedIpRange),
            secret_token: cdktf.stringToTerraform(struct.secretToken)
        };
    }
    var CodepipelineWebhookAuthenticationConfigurationOutputReference = /** @class */ (function (_super) {
        __extends(CodepipelineWebhookAuthenticationConfigurationOutputReference, _super);
        /**
        * @param terraformResource The parent resource
        * @param terraformAttribute The attribute on the parent resource this class is referencing
        * @param isSingleItem True if this is a block, false if it's a list
        */
        function CodepipelineWebhookAuthenticationConfigurationOutputReference(terraformResource, terraformAttribute, isSingleItem) {
            return _super.call(this, terraformResource, terraformAttribute, isSingleItem) || this;
        }
        Object.defineProperty(CodepipelineWebhookAuthenticationConfigurationOutputReference.prototype, "allowedIpRange", {
            get: function () {
                return this.getStringAttribute('allowed_ip_range');
            },
            set: function (value) {
                this._allowedIpRange = value;
            },
            enumerable: false,
            configurable: true
        });
        CodepipelineWebhookAuthenticationConfigurationOutputReference.prototype.resetAllowedIpRange = function () {
            this._allowedIpRange = undefined;
        };
        Object.defineProperty(CodepipelineWebhookAuthenticationConfigurationOutputReference.prototype, "allowedIpRangeInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._allowedIpRange;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CodepipelineWebhookAuthenticationConfigurationOutputReference.prototype, "secretToken", {
            get: function () {
                return this.getStringAttribute('secret_token');
            },
            set: function (value) {
                this._secretToken = value;
            },
            enumerable: false,
            configurable: true
        });
        CodepipelineWebhookAuthenticationConfigurationOutputReference.prototype.resetSecretToken = function () {
            this._secretToken = undefined;
        };
        Object.defineProperty(CodepipelineWebhookAuthenticationConfigurationOutputReference.prototype, "secretTokenInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._secretToken;
            },
            enumerable: false,
            configurable: true
        });
        return CodepipelineWebhookAuthenticationConfigurationOutputReference;
    }(cdktf.ComplexObject));
    CodePipeline.CodepipelineWebhookAuthenticationConfigurationOutputReference = CodepipelineWebhookAuthenticationConfigurationOutputReference;
    function codepipelineWebhookFilterToTerraform(struct) {
        if (!cdktf.canInspect(struct)) {
            return struct;
        }
        if (cdktf.isComplexElement(struct)) {
            throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
        }
        return {
            json_path: cdktf.stringToTerraform(struct.jsonPath),
            match_equals: cdktf.stringToTerraform(struct.matchEquals)
        };
    }
    /**
    * Represents a {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook.html aws_codepipeline_webhook}
    */
    var CodepipelineWebhook = /** @class */ (function (_super) {
        __extends(CodepipelineWebhook, _super);
        // ===========
        // INITIALIZER
        // ===========
        /**
        * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook.html aws_codepipeline_webhook} Resource
        *
        * @param scope The scope in which to define this construct
        * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
        * @param options CodepipelineWebhookConfig
        */
        function CodepipelineWebhook(scope, id, config) {
            var _this = _super.call(this, scope, id, {
                terraformResourceType: 'aws_codepipeline_webhook',
                terraformGeneratorMetadata: {
                    providerName: 'aws'
                },
                provider: config.provider,
                dependsOn: config.dependsOn,
                count: config.count,
                lifecycle: config.lifecycle
            }) || this;
            _this.__authenticationConfigurationOutput = new CodepipelineWebhookAuthenticationConfigurationOutputReference(_this, "authentication_configuration", true);
            _this._authentication = config.authentication;
            _this._name = config.name;
            _this._tags = config.tags;
            _this._tagsAll = config.tagsAll;
            _this._targetAction = config.targetAction;
            _this._targetPipeline = config.targetPipeline;
            _this._authenticationConfiguration = config.authenticationConfiguration;
            _this._filter = config.filter;
            return _this;
        }
        Object.defineProperty(CodepipelineWebhook.prototype, "authentication", {
            get: function () {
                return this.getStringAttribute('authentication');
            },
            set: function (value) {
                this._authentication = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CodepipelineWebhook.prototype, "authenticationInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._authentication;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CodepipelineWebhook.prototype, "id", {
            // id - computed: true, optional: true, required: false
            get: function () {
                return this.getStringAttribute('id');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CodepipelineWebhook.prototype, "name", {
            get: function () {
                return this.getStringAttribute('name');
            },
            set: function (value) {
                this._name = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CodepipelineWebhook.prototype, "nameInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._name;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CodepipelineWebhook.prototype, "tags", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags');
            },
            set: function (value) {
                this._tags = value;
            },
            enumerable: false,
            configurable: true
        });
        CodepipelineWebhook.prototype.resetTags = function () {
            this._tags = undefined;
        };
        Object.defineProperty(CodepipelineWebhook.prototype, "tagsInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tags;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CodepipelineWebhook.prototype, "tagsAll", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('tags_all');
            },
            set: function (value) {
                this._tagsAll = value;
            },
            enumerable: false,
            configurable: true
        });
        CodepipelineWebhook.prototype.resetTagsAll = function () {
            this._tagsAll = undefined;
        };
        Object.defineProperty(CodepipelineWebhook.prototype, "tagsAllInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._tagsAll;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CodepipelineWebhook.prototype, "targetAction", {
            get: function () {
                return this.getStringAttribute('target_action');
            },
            set: function (value) {
                this._targetAction = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CodepipelineWebhook.prototype, "targetActionInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._targetAction;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CodepipelineWebhook.prototype, "targetPipeline", {
            get: function () {
                return this.getStringAttribute('target_pipeline');
            },
            set: function (value) {
                this._targetPipeline = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CodepipelineWebhook.prototype, "targetPipelineInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._targetPipeline;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CodepipelineWebhook.prototype, "url", {
            // url - computed: true, optional: false, required: false
            get: function () {
                return this.getStringAttribute('url');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CodepipelineWebhook.prototype, "authenticationConfiguration", {
            get: function () {
                return this.__authenticationConfigurationOutput;
            },
            enumerable: false,
            configurable: true
        });
        CodepipelineWebhook.prototype.putAuthenticationConfiguration = function (value) {
            this._authenticationConfiguration = value;
        };
        CodepipelineWebhook.prototype.resetAuthenticationConfiguration = function () {
            this._authenticationConfiguration = undefined;
        };
        Object.defineProperty(CodepipelineWebhook.prototype, "authenticationConfigurationInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._authenticationConfiguration;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CodepipelineWebhook.prototype, "filter", {
            get: function () {
                // Getting the computed value is not yet implemented
                return this.interpolationForAttribute('filter');
            },
            set: function (value) {
                this._filter = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CodepipelineWebhook.prototype, "filterInput", {
            // Temporarily expose input value. Use with caution.
            get: function () {
                return this._filter;
            },
            enumerable: false,
            configurable: true
        });
        // =========
        // SYNTHESIS
        // =========
        CodepipelineWebhook.prototype.synthesizeAttributes = function () {
            return {
                authentication: cdktf.stringToTerraform(this._authentication),
                name: cdktf.stringToTerraform(this._name),
                tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
                tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
                target_action: cdktf.stringToTerraform(this._targetAction),
                target_pipeline: cdktf.stringToTerraform(this._targetPipeline),
                authentication_configuration: codepipelineWebhookAuthenticationConfigurationToTerraform(this._authenticationConfiguration),
                filter: cdktf.listMapper(codepipelineWebhookFilterToTerraform)(this._filter)
            };
        };
        // =================
        // STATIC PROPERTIES
        // =================
        CodepipelineWebhook.tfResourceType = "aws_codepipeline_webhook";
        return CodepipelineWebhook;
    }(cdktf.TerraformResource));
    CodePipeline.CodepipelineWebhook = CodepipelineWebhook;
})(CodePipeline = exports.CodePipeline || (exports.CodePipeline = {}));
