"use strict";
// https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html
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
exports.CloudformationStackSetInstance = void 0;
var cdktf = require("cdktf");
function cloudformationStackSetInstanceDeploymentTargetsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        organizational_unit_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.organizationalUnitIds)
    };
}
function cloudformationStackSetInstanceTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        "delete": cdktf.stringToTerraform(struct["delete"]),
        update: cdktf.stringToTerraform(struct.update)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html aws_cloudformation_stack_set_instance}
*/
var CloudformationStackSetInstance = /** @class */ (function (_super) {
    __extends(CloudformationStackSetInstance, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudformation_stack_set_instance.html aws_cloudformation_stack_set_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudformationStackSetInstanceConfig
    */
    function CloudformationStackSetInstance(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_cloudformation_stack_set_instance',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._accountId = config.accountId;
        _this._parameterOverrides = config.parameterOverrides;
        _this._region = config.region;
        _this._retainStack = config.retainStack;
        _this._stackSetName = config.stackSetName;
        _this._deploymentTargets = config.deploymentTargets;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(CloudformationStackSetInstance.prototype, "accountId", {
        get: function () {
            return this.getStringAttribute('account_id');
        },
        set: function (value) {
            this._accountId = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudformationStackSetInstance.prototype.resetAccountId = function () {
        this._accountId = undefined;
    };
    Object.defineProperty(CloudformationStackSetInstance.prototype, "accountIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._accountId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationStackSetInstance.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationStackSetInstance.prototype, "organizationalUnitId", {
        // organizational_unit_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('organizational_unit_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationStackSetInstance.prototype, "parameterOverrides", {
        get: function () {
            return this.interpolationForAttribute('parameter_overrides');
        },
        set: function (value) {
            this._parameterOverrides = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudformationStackSetInstance.prototype.resetParameterOverrides = function () {
        this._parameterOverrides = undefined;
    };
    Object.defineProperty(CloudformationStackSetInstance.prototype, "parameterOverridesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._parameterOverrides;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationStackSetInstance.prototype, "region", {
        get: function () {
            return this.getStringAttribute('region');
        },
        set: function (value) {
            this._region = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudformationStackSetInstance.prototype.resetRegion = function () {
        this._region = undefined;
    };
    Object.defineProperty(CloudformationStackSetInstance.prototype, "regionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._region;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationStackSetInstance.prototype, "retainStack", {
        get: function () {
            return this.getBooleanAttribute('retain_stack');
        },
        set: function (value) {
            this._retainStack = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudformationStackSetInstance.prototype.resetRetainStack = function () {
        this._retainStack = undefined;
    };
    Object.defineProperty(CloudformationStackSetInstance.prototype, "retainStackInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._retainStack;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationStackSetInstance.prototype, "stackId", {
        // stack_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('stack_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationStackSetInstance.prototype, "stackSetName", {
        get: function () {
            return this.getStringAttribute('stack_set_name');
        },
        set: function (value) {
            this._stackSetName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationStackSetInstance.prototype, "stackSetNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._stackSetName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationStackSetInstance.prototype, "deploymentTargets", {
        get: function () {
            return this.interpolationForAttribute('deployment_targets');
        },
        set: function (value) {
            this._deploymentTargets = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudformationStackSetInstance.prototype.resetDeploymentTargets = function () {
        this._deploymentTargets = undefined;
    };
    Object.defineProperty(CloudformationStackSetInstance.prototype, "deploymentTargetsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._deploymentTargets;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudformationStackSetInstance.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudformationStackSetInstance.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(CloudformationStackSetInstance.prototype, "timeoutsInput", {
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
    CloudformationStackSetInstance.prototype.synthesizeAttributes = function () {
        return {
            account_id: cdktf.stringToTerraform(this._accountId),
            parameter_overrides: cdktf.hashMapper(cdktf.anyToTerraform)(this._parameterOverrides),
            region: cdktf.stringToTerraform(this._region),
            retain_stack: cdktf.booleanToTerraform(this._retainStack),
            stack_set_name: cdktf.stringToTerraform(this._stackSetName),
            deployment_targets: cdktf.listMapper(cloudformationStackSetInstanceDeploymentTargetsToTerraform)(this._deploymentTargets),
            timeouts: cloudformationStackSetInstanceTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CloudformationStackSetInstance.tfResourceType = "aws_cloudformation_stack_set_instance";
    return CloudformationStackSetInstance;
}(cdktf.TerraformResource));
exports.CloudformationStackSetInstance = CloudformationStackSetInstance;
