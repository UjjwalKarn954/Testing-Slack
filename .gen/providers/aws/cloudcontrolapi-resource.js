"use strict";
// https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource.html
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
exports.CloudcontrolapiResource = void 0;
var cdktf = require("cdktf");
function cloudcontrolapiResourceTimeoutsToTerraform(struct) {
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource.html aws_cloudcontrolapi_resource}
*/
var CloudcontrolapiResource = /** @class */ (function (_super) {
    __extends(CloudcontrolapiResource, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudcontrolapi_resource.html aws_cloudcontrolapi_resource} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudcontrolapiResourceConfig
    */
    function CloudcontrolapiResource(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_cloudcontrolapi_resource',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._desiredState = config.desiredState;
        _this._roleArn = config.roleArn;
        _this._schema = config.schema;
        _this._typeName = config.typeName;
        _this._typeVersionId = config.typeVersionId;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(CloudcontrolapiResource.prototype, "desiredState", {
        get: function () {
            return this.getStringAttribute('desired_state');
        },
        set: function (value) {
            this._desiredState = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudcontrolapiResource.prototype, "desiredStateInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._desiredState;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudcontrolapiResource.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudcontrolapiResource.prototype, "properties", {
        // properties - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('properties');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudcontrolapiResource.prototype, "roleArn", {
        get: function () {
            return this.getStringAttribute('role_arn');
        },
        set: function (value) {
            this._roleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudcontrolapiResource.prototype.resetRoleArn = function () {
        this._roleArn = undefined;
    };
    Object.defineProperty(CloudcontrolapiResource.prototype, "roleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._roleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudcontrolapiResource.prototype, "schema", {
        get: function () {
            return this.getStringAttribute('schema');
        },
        set: function (value) {
            this._schema = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudcontrolapiResource.prototype.resetSchema = function () {
        this._schema = undefined;
    };
    Object.defineProperty(CloudcontrolapiResource.prototype, "schemaInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._schema;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudcontrolapiResource.prototype, "typeName", {
        get: function () {
            return this.getStringAttribute('type_name');
        },
        set: function (value) {
            this._typeName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudcontrolapiResource.prototype, "typeNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._typeName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudcontrolapiResource.prototype, "typeVersionId", {
        get: function () {
            return this.getStringAttribute('type_version_id');
        },
        set: function (value) {
            this._typeVersionId = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudcontrolapiResource.prototype.resetTypeVersionId = function () {
        this._typeVersionId = undefined;
    };
    Object.defineProperty(CloudcontrolapiResource.prototype, "typeVersionIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._typeVersionId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CloudcontrolapiResource.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    CloudcontrolapiResource.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(CloudcontrolapiResource.prototype, "timeoutsInput", {
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
    CloudcontrolapiResource.prototype.synthesizeAttributes = function () {
        return {
            desired_state: cdktf.stringToTerraform(this._desiredState),
            role_arn: cdktf.stringToTerraform(this._roleArn),
            schema: cdktf.stringToTerraform(this._schema),
            type_name: cdktf.stringToTerraform(this._typeName),
            type_version_id: cdktf.stringToTerraform(this._typeVersionId),
            timeouts: cloudcontrolapiResourceTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CloudcontrolapiResource.tfResourceType = "aws_cloudcontrolapi_resource";
    return CloudcontrolapiResource;
}(cdktf.TerraformResource));
exports.CloudcontrolapiResource = CloudcontrolapiResource;
