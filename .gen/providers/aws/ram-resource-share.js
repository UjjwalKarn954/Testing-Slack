"use strict";
// https://www.terraform.io/docs/providers/aws/r/ram_resource_share.html
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
exports.RamResourceShare = void 0;
var cdktf = require("cdktf");
function ramResourceShareTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        "delete": cdktf.stringToTerraform(struct["delete"])
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_share.html aws_ram_resource_share}
*/
var RamResourceShare = /** @class */ (function (_super) {
    __extends(RamResourceShare, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ram_resource_share.html aws_ram_resource_share} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RamResourceShareConfig
    */
    function RamResourceShare(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_ram_resource_share',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._allowExternalPrincipals = config.allowExternalPrincipals;
        _this._name = config.name;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(RamResourceShare.prototype, "allowExternalPrincipals", {
        get: function () {
            return this.getBooleanAttribute('allow_external_principals');
        },
        set: function (value) {
            this._allowExternalPrincipals = value;
        },
        enumerable: false,
        configurable: true
    });
    RamResourceShare.prototype.resetAllowExternalPrincipals = function () {
        this._allowExternalPrincipals = undefined;
    };
    Object.defineProperty(RamResourceShare.prototype, "allowExternalPrincipalsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._allowExternalPrincipals;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RamResourceShare.prototype, "arn", {
        // arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RamResourceShare.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RamResourceShare.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RamResourceShare.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RamResourceShare.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    RamResourceShare.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(RamResourceShare.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RamResourceShare.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    RamResourceShare.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(RamResourceShare.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RamResourceShare.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    RamResourceShare.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(RamResourceShare.prototype, "timeoutsInput", {
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
    RamResourceShare.prototype.synthesizeAttributes = function () {
        return {
            allow_external_principals: cdktf.booleanToTerraform(this._allowExternalPrincipals),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            timeouts: ramResourceShareTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    RamResourceShare.tfResourceType = "aws_ram_resource_share";
    return RamResourceShare;
}(cdktf.TerraformResource));
exports.RamResourceShare = RamResourceShare;
