"use strict";
// https://www.terraform.io/docs/providers/aws/r/lightsail_instance.html
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
exports.LightsailInstance = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance.html aws_lightsail_instance}
*/
var LightsailInstance = /** @class */ (function (_super) {
    __extends(LightsailInstance, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lightsail_instance.html aws_lightsail_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LightsailInstanceConfig
    */
    function LightsailInstance(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_lightsail_instance',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._availabilityZone = config.availabilityZone;
        _this._blueprintId = config.blueprintId;
        _this._bundleId = config.bundleId;
        _this._keyPairName = config.keyPairName;
        _this._name = config.name;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._userData = config.userData;
        return _this;
    }
    Object.defineProperty(LightsailInstance.prototype, "arn", {
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
    Object.defineProperty(LightsailInstance.prototype, "availabilityZone", {
        get: function () {
            return this.getStringAttribute('availability_zone');
        },
        set: function (value) {
            this._availabilityZone = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LightsailInstance.prototype, "availabilityZoneInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._availabilityZone;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LightsailInstance.prototype, "blueprintId", {
        get: function () {
            return this.getStringAttribute('blueprint_id');
        },
        set: function (value) {
            this._blueprintId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LightsailInstance.prototype, "blueprintIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._blueprintId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LightsailInstance.prototype, "bundleId", {
        get: function () {
            return this.getStringAttribute('bundle_id');
        },
        set: function (value) {
            this._bundleId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LightsailInstance.prototype, "bundleIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bundleId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LightsailInstance.prototype, "cpuCount", {
        // cpu_count - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('cpu_count');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LightsailInstance.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LightsailInstance.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LightsailInstance.prototype, "ipv6Address", {
        // ipv6_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ipv6_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LightsailInstance.prototype, "ipv6Addresses", {
        // ipv6_addresses - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('ipv6_addresses');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LightsailInstance.prototype, "isStaticIp", {
        // is_static_ip - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('is_static_ip');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LightsailInstance.prototype, "keyPairName", {
        get: function () {
            return this.getStringAttribute('key_pair_name');
        },
        set: function (value) {
            this._keyPairName = value;
        },
        enumerable: false,
        configurable: true
    });
    LightsailInstance.prototype.resetKeyPairName = function () {
        this._keyPairName = undefined;
    };
    Object.defineProperty(LightsailInstance.prototype, "keyPairNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._keyPairName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LightsailInstance.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LightsailInstance.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LightsailInstance.prototype, "privateIpAddress", {
        // private_ip_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('private_ip_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LightsailInstance.prototype, "publicIpAddress", {
        // public_ip_address - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('public_ip_address');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LightsailInstance.prototype, "ramSize", {
        // ram_size - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('ram_size');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LightsailInstance.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    LightsailInstance.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(LightsailInstance.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LightsailInstance.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    LightsailInstance.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(LightsailInstance.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LightsailInstance.prototype, "userData", {
        get: function () {
            return this.getStringAttribute('user_data');
        },
        set: function (value) {
            this._userData = value;
        },
        enumerable: false,
        configurable: true
    });
    LightsailInstance.prototype.resetUserData = function () {
        this._userData = undefined;
    };
    Object.defineProperty(LightsailInstance.prototype, "userDataInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._userData;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LightsailInstance.prototype, "username", {
        // username - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('username');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    LightsailInstance.prototype.synthesizeAttributes = function () {
        return {
            availability_zone: cdktf.stringToTerraform(this._availabilityZone),
            blueprint_id: cdktf.stringToTerraform(this._blueprintId),
            bundle_id: cdktf.stringToTerraform(this._bundleId),
            key_pair_name: cdktf.stringToTerraform(this._keyPairName),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            user_data: cdktf.stringToTerraform(this._userData)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    LightsailInstance.tfResourceType = "aws_lightsail_instance";
    return LightsailInstance;
}(cdktf.TerraformResource));
exports.LightsailInstance = LightsailInstance;
