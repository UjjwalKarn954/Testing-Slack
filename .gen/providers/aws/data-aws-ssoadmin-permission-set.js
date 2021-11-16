"use strict";
// https://www.terraform.io/docs/providers/aws/d/ssoadmin_permission_set.html
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
exports.DataAwsSsoadminPermissionSet = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ssoadmin_permission_set.html aws_ssoadmin_permission_set}
*/
var DataAwsSsoadminPermissionSet = /** @class */ (function (_super) {
    __extends(DataAwsSsoadminPermissionSet, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ssoadmin_permission_set.html aws_ssoadmin_permission_set} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSsoadminPermissionSetConfig
    */
    function DataAwsSsoadminPermissionSet(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ssoadmin_permission_set',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._instanceArn = config.instanceArn;
        _this._name = config.name;
        _this._tags = config.tags;
        return _this;
    }
    Object.defineProperty(DataAwsSsoadminPermissionSet.prototype, "arn", {
        // ==========
        // ATTRIBUTES
        // ==========
        // arn - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSsoadminPermissionSet.prototype, "createdDate", {
        // created_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSsoadminPermissionSet.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSsoadminPermissionSet.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSsoadminPermissionSet.prototype, "instanceArn", {
        get: function () {
            return this.getStringAttribute('instance_arn');
        },
        set: function (value) {
            this._instanceArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSsoadminPermissionSet.prototype, "instanceArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSsoadminPermissionSet.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsSsoadminPermissionSet.prototype.resetName = function () {
        this._name = undefined;
    };
    Object.defineProperty(DataAwsSsoadminPermissionSet.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSsoadminPermissionSet.prototype, "relayState", {
        // relay_state - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('relay_state');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSsoadminPermissionSet.prototype, "sessionDuration", {
        // session_duration - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('session_duration');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsSsoadminPermissionSet.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsSsoadminPermissionSet.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsSsoadminPermissionSet.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsSsoadminPermissionSet.prototype.synthesizeAttributes = function () {
        return {
            instance_arn: cdktf.stringToTerraform(this._instanceArn),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsSsoadminPermissionSet.tfResourceType = "aws_ssoadmin_permission_set";
    return DataAwsSsoadminPermissionSet;
}(cdktf.TerraformDataSource));
exports.DataAwsSsoadminPermissionSet = DataAwsSsoadminPermissionSet;
