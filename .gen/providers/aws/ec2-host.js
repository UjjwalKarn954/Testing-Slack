"use strict";
// https://www.terraform.io/docs/providers/aws/r/ec2_host.html
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
exports.Ec2Host = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_host.html aws_ec2_host}
*/
var Ec2Host = /** @class */ (function (_super) {
    __extends(Ec2Host, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_host.html aws_ec2_host} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2HostConfig
    */
    function Ec2Host(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ec2_host',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._autoPlacement = config.autoPlacement;
        _this._availabilityZone = config.availabilityZone;
        _this._hostRecovery = config.hostRecovery;
        _this._instanceFamily = config.instanceFamily;
        _this._instanceType = config.instanceType;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(Ec2Host.prototype, "arn", {
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
    Object.defineProperty(Ec2Host.prototype, "autoPlacement", {
        get: function () {
            return this.getStringAttribute('auto_placement');
        },
        set: function (value) {
            this._autoPlacement = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2Host.prototype.resetAutoPlacement = function () {
        this._autoPlacement = undefined;
    };
    Object.defineProperty(Ec2Host.prototype, "autoPlacementInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._autoPlacement;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2Host.prototype, "availabilityZone", {
        get: function () {
            return this.getStringAttribute('availability_zone');
        },
        set: function (value) {
            this._availabilityZone = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2Host.prototype, "availabilityZoneInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._availabilityZone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2Host.prototype, "hostRecovery", {
        get: function () {
            return this.getStringAttribute('host_recovery');
        },
        set: function (value) {
            this._hostRecovery = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2Host.prototype.resetHostRecovery = function () {
        this._hostRecovery = undefined;
    };
    Object.defineProperty(Ec2Host.prototype, "hostRecoveryInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hostRecovery;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2Host.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2Host.prototype, "instanceFamily", {
        get: function () {
            return this.getStringAttribute('instance_family');
        },
        set: function (value) {
            this._instanceFamily = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2Host.prototype.resetInstanceFamily = function () {
        this._instanceFamily = undefined;
    };
    Object.defineProperty(Ec2Host.prototype, "instanceFamilyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceFamily;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2Host.prototype, "instanceType", {
        get: function () {
            return this.getStringAttribute('instance_type');
        },
        set: function (value) {
            this._instanceType = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2Host.prototype.resetInstanceType = function () {
        this._instanceType = undefined;
    };
    Object.defineProperty(Ec2Host.prototype, "instanceTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._instanceType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2Host.prototype, "ownerId", {
        // owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2Host.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2Host.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(Ec2Host.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ec2Host.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    Ec2Host.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(Ec2Host.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    Ec2Host.prototype.synthesizeAttributes = function () {
        return {
            auto_placement: cdktf.stringToTerraform(this._autoPlacement),
            availability_zone: cdktf.stringToTerraform(this._availabilityZone),
            host_recovery: cdktf.stringToTerraform(this._hostRecovery),
            instance_family: cdktf.stringToTerraform(this._instanceFamily),
            instance_type: cdktf.stringToTerraform(this._instanceType),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Ec2Host.tfResourceType = "aws_ec2_host";
    return Ec2Host;
}(cdktf.TerraformResource));
exports.Ec2Host = Ec2Host;
