"use strict";
// https://www.terraform.io/docs/providers/aws/r/wafv2_ip_set.html
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
exports.Wafv2IpSet = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/wafv2_ip_set.html aws_wafv2_ip_set}
*/
var Wafv2IpSet = /** @class */ (function (_super) {
    __extends(Wafv2IpSet, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/wafv2_ip_set.html aws_wafv2_ip_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Wafv2IpSetConfig
    */
    function Wafv2IpSet(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_wafv2_ip_set',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._addresses = config.addresses;
        _this._description = config.description;
        _this._ipAddressVersion = config.ipAddressVersion;
        _this._name = config.name;
        _this._scope = config.scope;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(Wafv2IpSet.prototype, "addresses", {
        get: function () {
            return this.getListAttribute('addresses');
        },
        set: function (value) {
            this._addresses = value;
        },
        enumerable: false,
        configurable: true
    });
    Wafv2IpSet.prototype.resetAddresses = function () {
        this._addresses = undefined;
    };
    Object.defineProperty(Wafv2IpSet.prototype, "addressesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._addresses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wafv2IpSet.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wafv2IpSet.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    Wafv2IpSet.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(Wafv2IpSet.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wafv2IpSet.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wafv2IpSet.prototype, "ipAddressVersion", {
        get: function () {
            return this.getStringAttribute('ip_address_version');
        },
        set: function (value) {
            this._ipAddressVersion = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wafv2IpSet.prototype, "ipAddressVersionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ipAddressVersion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wafv2IpSet.prototype, "lockToken", {
        // lock_token - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('lock_token');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wafv2IpSet.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wafv2IpSet.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wafv2IpSet.prototype, "scope", {
        get: function () {
            return this.getStringAttribute('scope');
        },
        set: function (value) {
            this._scope = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wafv2IpSet.prototype, "scopeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._scope;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wafv2IpSet.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    Wafv2IpSet.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(Wafv2IpSet.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Wafv2IpSet.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    Wafv2IpSet.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(Wafv2IpSet.prototype, "tagsAllInput", {
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
    Wafv2IpSet.prototype.synthesizeAttributes = function () {
        return {
            addresses: cdktf.listMapper(cdktf.stringToTerraform)(this._addresses),
            description: cdktf.stringToTerraform(this._description),
            ip_address_version: cdktf.stringToTerraform(this._ipAddressVersion),
            name: cdktf.stringToTerraform(this._name),
            scope: cdktf.stringToTerraform(this._scope),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    Wafv2IpSet.tfResourceType = "aws_wafv2_ip_set";
    return Wafv2IpSet;
}(cdktf.TerraformResource));
exports.Wafv2IpSet = Wafv2IpSet;
