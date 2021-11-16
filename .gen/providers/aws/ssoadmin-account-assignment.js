"use strict";
// https://www.terraform.io/docs/providers/aws/r/ssoadmin_account_assignment.html
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
exports.SsoadminAccountAssignment = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_account_assignment.html aws_ssoadmin_account_assignment}
*/
var SsoadminAccountAssignment = /** @class */ (function (_super) {
    __extends(SsoadminAccountAssignment, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ssoadmin_account_assignment.html aws_ssoadmin_account_assignment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SsoadminAccountAssignmentConfig
    */
    function SsoadminAccountAssignment(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ssoadmin_account_assignment',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._instanceArn = config.instanceArn;
        _this._permissionSetArn = config.permissionSetArn;
        _this._principalId = config.principalId;
        _this._principalType = config.principalType;
        _this._targetId = config.targetId;
        _this._targetType = config.targetType;
        return _this;
    }
    Object.defineProperty(SsoadminAccountAssignment.prototype, "id", {
        // ==========
        // ATTRIBUTES
        // ==========
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsoadminAccountAssignment.prototype, "instanceArn", {
        get: function () {
            return this.getStringAttribute('instance_arn');
        },
        set: function (value) {
            this._instanceArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsoadminAccountAssignment.prototype, "instanceArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsoadminAccountAssignment.prototype, "permissionSetArn", {
        get: function () {
            return this.getStringAttribute('permission_set_arn');
        },
        set: function (value) {
            this._permissionSetArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsoadminAccountAssignment.prototype, "permissionSetArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._permissionSetArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsoadminAccountAssignment.prototype, "principalId", {
        get: function () {
            return this.getStringAttribute('principal_id');
        },
        set: function (value) {
            this._principalId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsoadminAccountAssignment.prototype, "principalIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._principalId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsoadminAccountAssignment.prototype, "principalType", {
        get: function () {
            return this.getStringAttribute('principal_type');
        },
        set: function (value) {
            this._principalType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsoadminAccountAssignment.prototype, "principalTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._principalType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsoadminAccountAssignment.prototype, "targetId", {
        get: function () {
            return this.getStringAttribute('target_id');
        },
        set: function (value) {
            this._targetId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsoadminAccountAssignment.prototype, "targetIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targetId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SsoadminAccountAssignment.prototype, "targetType", {
        get: function () {
            return this.getStringAttribute('target_type');
        },
        set: function (value) {
            this._targetType = value;
        },
        enumerable: false,
        configurable: true
    });
    SsoadminAccountAssignment.prototype.resetTargetType = function () {
        this._targetType = undefined;
    };
    Object.defineProperty(SsoadminAccountAssignment.prototype, "targetTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._targetType;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    SsoadminAccountAssignment.prototype.synthesizeAttributes = function () {
        return {
            instance_arn: cdktf.stringToTerraform(this._instanceArn),
            permission_set_arn: cdktf.stringToTerraform(this._permissionSetArn),
            principal_id: cdktf.stringToTerraform(this._principalId),
            principal_type: cdktf.stringToTerraform(this._principalType),
            target_id: cdktf.stringToTerraform(this._targetId),
            target_type: cdktf.stringToTerraform(this._targetType)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    SsoadminAccountAssignment.tfResourceType = "aws_ssoadmin_account_assignment";
    return SsoadminAccountAssignment;
}(cdktf.TerraformResource));
exports.SsoadminAccountAssignment = SsoadminAccountAssignment;
