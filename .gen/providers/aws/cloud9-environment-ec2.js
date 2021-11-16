"use strict";
// https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2.html
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
exports.Cloud9EnvironmentEc2 = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2.html aws_cloud9_environment_ec2}
*/
var Cloud9EnvironmentEc2 = /** @class */ (function (_super) {
    __extends(Cloud9EnvironmentEc2, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2.html aws_cloud9_environment_ec2} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Cloud9EnvironmentEc2Config
    */
    function Cloud9EnvironmentEc2(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_cloud9_environment_ec2',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._automaticStopTimeMinutes = config.automaticStopTimeMinutes;
        _this._description = config.description;
        _this._instanceType = config.instanceType;
        _this._name = config.name;
        _this._ownerArn = config.ownerArn;
        _this._subnetId = config.subnetId;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(Cloud9EnvironmentEc2.prototype, "arn", {
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
    Object.defineProperty(Cloud9EnvironmentEc2.prototype, "automaticStopTimeMinutes", {
        get: function () {
            return this.getNumberAttribute('automatic_stop_time_minutes');
        },
        set: function (value) {
            this._automaticStopTimeMinutes = value;
        },
        enumerable: false,
        configurable: true
    });
    Cloud9EnvironmentEc2.prototype.resetAutomaticStopTimeMinutes = function () {
        this._automaticStopTimeMinutes = undefined;
    };
    Object.defineProperty(Cloud9EnvironmentEc2.prototype, "automaticStopTimeMinutesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._automaticStopTimeMinutes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cloud9EnvironmentEc2.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    Cloud9EnvironmentEc2.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(Cloud9EnvironmentEc2.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cloud9EnvironmentEc2.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cloud9EnvironmentEc2.prototype, "instanceType", {
        get: function () {
            return this.getStringAttribute('instance_type');
        },
        set: function (value) {
            this._instanceType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cloud9EnvironmentEc2.prototype, "instanceTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cloud9EnvironmentEc2.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cloud9EnvironmentEc2.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cloud9EnvironmentEc2.prototype, "ownerArn", {
        get: function () {
            return this.getStringAttribute('owner_arn');
        },
        set: function (value) {
            this._ownerArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Cloud9EnvironmentEc2.prototype.resetOwnerArn = function () {
        this._ownerArn = undefined;
    };
    Object.defineProperty(Cloud9EnvironmentEc2.prototype, "ownerArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ownerArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cloud9EnvironmentEc2.prototype, "subnetId", {
        get: function () {
            return this.getStringAttribute('subnet_id');
        },
        set: function (value) {
            this._subnetId = value;
        },
        enumerable: false,
        configurable: true
    });
    Cloud9EnvironmentEc2.prototype.resetSubnetId = function () {
        this._subnetId = undefined;
    };
    Object.defineProperty(Cloud9EnvironmentEc2.prototype, "subnetIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._subnetId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cloud9EnvironmentEc2.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    Cloud9EnvironmentEc2.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(Cloud9EnvironmentEc2.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cloud9EnvironmentEc2.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    Cloud9EnvironmentEc2.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(Cloud9EnvironmentEc2.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cloud9EnvironmentEc2.prototype, "type", {
        // type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('type');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Cloud9EnvironmentEc2.prototype.synthesizeAttributes = function () {
        return {
            automatic_stop_time_minutes: cdktf.numberToTerraform(this._automaticStopTimeMinutes),
            description: cdktf.stringToTerraform(this._description),
            instance_type: cdktf.stringToTerraform(this._instanceType),
            name: cdktf.stringToTerraform(this._name),
            owner_arn: cdktf.stringToTerraform(this._ownerArn),
            subnet_id: cdktf.stringToTerraform(this._subnetId),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Cloud9EnvironmentEc2.tfResourceType = "aws_cloud9_environment_ec2";
    return Cloud9EnvironmentEc2;
}(cdktf.TerraformResource));
exports.Cloud9EnvironmentEc2 = Cloud9EnvironmentEc2;
