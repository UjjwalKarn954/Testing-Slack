"use strict";
// https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html
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
exports.CloudformationStackSet = void 0;
var cdktf = require("cdktf");
function cloudformationStackSetAutoDeploymentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        retain_stacks_on_account_removal: cdktf.booleanToTerraform(struct.retainStacksOnAccountRemoval)
    };
}
function cloudformationStackSetTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        update: cdktf.stringToTerraform(struct.update)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html aws_cloudformation_stack_set}
*/
var CloudformationStackSet = /** @class */ (function (_super) {
    __extends(CloudformationStackSet, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set.html aws_cloudformation_stack_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudformationStackSetConfig
    */
    function CloudformationStackSet(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_cloudformation_stack_set',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._administrationRoleArn = config.administrationRoleArn;
        _this._capabilities = config.capabilities;
        _this._description = config.description;
        _this._executionRoleName = config.executionRoleName;
        _this._name = config.name;
        _this._parameters = config.parameters;
        _this._permissionModel = config.permissionModel;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._templateBody = config.templateBody;
        _this._templateUrl = config.templateUrl;
        _this._autoDeployment = config.autoDeployment;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(CloudformationStackSet.prototype, "administrationRoleArn", {
        get: function () {
            return this.getStringAttribute('administration_role_arn');
        },
        set: function (value) {
            this._administrationRoleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudformationStackSet.prototype.resetAdministrationRoleArn = function () {
        this._administrationRoleArn = undefined;
    };
    Object.defineProperty(CloudformationStackSet.prototype, "administrationRoleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._administrationRoleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationStackSet.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationStackSet.prototype, "capabilities", {
        get: function () {
            return this.getListAttribute('capabilities');
        },
        set: function (value) {
            this._capabilities = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudformationStackSet.prototype.resetCapabilities = function () {
        this._capabilities = undefined;
    };
    Object.defineProperty(CloudformationStackSet.prototype, "capabilitiesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._capabilities;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationStackSet.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudformationStackSet.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(CloudformationStackSet.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationStackSet.prototype, "executionRoleName", {
        get: function () {
            return this.getStringAttribute('execution_role_name');
        },
        set: function (value) {
            this._executionRoleName = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudformationStackSet.prototype.resetExecutionRoleName = function () {
        this._executionRoleName = undefined;
    };
    Object.defineProperty(CloudformationStackSet.prototype, "executionRoleNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._executionRoleName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationStackSet.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationStackSet.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationStackSet.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationStackSet.prototype, "parameters", {
        get: function () {
            return this.interpolationForAttribute('parameters');
        },
        set: function (value) {
            this._parameters = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudformationStackSet.prototype.resetParameters = function () {
        this._parameters = undefined;
    };
    Object.defineProperty(CloudformationStackSet.prototype, "parametersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._parameters;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationStackSet.prototype, "permissionModel", {
        get: function () {
            return this.getStringAttribute('permission_model');
        },
        set: function (value) {
            this._permissionModel = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudformationStackSet.prototype.resetPermissionModel = function () {
        this._permissionModel = undefined;
    };
    Object.defineProperty(CloudformationStackSet.prototype, "permissionModelInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._permissionModel;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationStackSet.prototype, "stackSetId", {
        // stack_set_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('stack_set_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationStackSet.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudformationStackSet.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(CloudformationStackSet.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationStackSet.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudformationStackSet.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(CloudformationStackSet.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationStackSet.prototype, "templateBody", {
        get: function () {
            return this.getStringAttribute('template_body');
        },
        set: function (value) {
            this._templateBody = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudformationStackSet.prototype.resetTemplateBody = function () {
        this._templateBody = undefined;
    };
    Object.defineProperty(CloudformationStackSet.prototype, "templateBodyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._templateBody;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationStackSet.prototype, "templateUrl", {
        get: function () {
            return this.getStringAttribute('template_url');
        },
        set: function (value) {
            this._templateUrl = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudformationStackSet.prototype.resetTemplateUrl = function () {
        this._templateUrl = undefined;
    };
    Object.defineProperty(CloudformationStackSet.prototype, "templateUrlInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._templateUrl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationStackSet.prototype, "autoDeployment", {
        get: function () {
            return this.interpolationForAttribute('auto_deployment');
        },
        set: function (value) {
            this._autoDeployment = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudformationStackSet.prototype.resetAutoDeployment = function () {
        this._autoDeployment = undefined;
    };
    Object.defineProperty(CloudformationStackSet.prototype, "autoDeploymentInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoDeployment;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationStackSet.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudformationStackSet.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(CloudformationStackSet.prototype, "timeoutsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeouts;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CloudformationStackSet.prototype.synthesizeAttributes = function () {
        return {
            administration_role_arn: cdktf.stringToTerraform(this._administrationRoleArn),
            capabilities: cdktf.listMapper(cdktf.stringToTerraform)(this._capabilities),
            description: cdktf.stringToTerraform(this._description),
            execution_role_name: cdktf.stringToTerraform(this._executionRoleName),
            name: cdktf.stringToTerraform(this._name),
            parameters: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameters),
            permission_model: cdktf.stringToTerraform(this._permissionModel),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            template_body: cdktf.stringToTerraform(this._templateBody),
            template_url: cdktf.stringToTerraform(this._templateUrl),
            auto_deployment: cdktf.listMapper(cloudformationStackSetAutoDeploymentToTerraform)(this._autoDeployment),
            timeouts: cloudformationStackSetTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CloudformationStackSet.tfResourceType = "aws_cloudformation_stack_set";
    return CloudformationStackSet;
}(cdktf.TerraformResource));
exports.CloudformationStackSet = CloudformationStackSet;
