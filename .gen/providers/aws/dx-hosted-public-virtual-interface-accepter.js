"use strict";
// https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter.html
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
exports.DxHostedPublicVirtualInterfaceAccepter = void 0;
var cdktf = require("cdktf");
function dxHostedPublicVirtualInterfaceAccepterTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        "delete": cdktf.stringToTerraform(struct["delete"])
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter.html aws_dx_hosted_public_virtual_interface_accepter}
*/
var DxHostedPublicVirtualInterfaceAccepter = /** @class */ (function (_super) {
    __extends(DxHostedPublicVirtualInterfaceAccepter, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_public_virtual_interface_accepter.html aws_dx_hosted_public_virtual_interface_accepter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DxHostedPublicVirtualInterfaceAccepterConfig
    */
    function DxHostedPublicVirtualInterfaceAccepter(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_dx_hosted_public_virtual_interface_accepter',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._virtualInterfaceId = config.virtualInterfaceId;
        _this._timeouts = config.timeouts;
        return _this;
    }
    Object.defineProperty(DxHostedPublicVirtualInterfaceAccepter.prototype, "arn", {
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
    Object.defineProperty(DxHostedPublicVirtualInterfaceAccepter.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxHostedPublicVirtualInterfaceAccepter.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DxHostedPublicVirtualInterfaceAccepter.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DxHostedPublicVirtualInterfaceAccepter.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxHostedPublicVirtualInterfaceAccepter.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    DxHostedPublicVirtualInterfaceAccepter.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(DxHostedPublicVirtualInterfaceAccepter.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxHostedPublicVirtualInterfaceAccepter.prototype, "virtualInterfaceId", {
        get: function () {
            return this.getStringAttribute('virtual_interface_id');
        },
        set: function (value) {
            this._virtualInterfaceId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxHostedPublicVirtualInterfaceAccepter.prototype, "virtualInterfaceIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._virtualInterfaceId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxHostedPublicVirtualInterfaceAccepter.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    DxHostedPublicVirtualInterfaceAccepter.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(DxHostedPublicVirtualInterfaceAccepter.prototype, "timeoutsInput", {
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
    DxHostedPublicVirtualInterfaceAccepter.prototype.synthesizeAttributes = function () {
        return {
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            virtual_interface_id: cdktf.stringToTerraform(this._virtualInterfaceId),
            timeouts: dxHostedPublicVirtualInterfaceAccepterTimeoutsToTerraform(this._timeouts)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DxHostedPublicVirtualInterfaceAccepter.tfResourceType = "aws_dx_hosted_public_virtual_interface_accepter";
    return DxHostedPublicVirtualInterfaceAccepter;
}(cdktf.TerraformResource));
exports.DxHostedPublicVirtualInterfaceAccepter = DxHostedPublicVirtualInterfaceAccepter;