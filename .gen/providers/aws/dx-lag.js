"use strict";
// https://www.terraform.io/docs/providers/aws/r/dx_lag.html
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
exports.DxLag = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_lag.html aws_dx_lag}
*/
var DxLag = /** @class */ (function (_super) {
    __extends(DxLag, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_lag.html aws_dx_lag} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DxLagConfig
    */
    function DxLag(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_dx_lag',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._connectionId = config.connectionId;
        _this._connectionsBandwidth = config.connectionsBandwidth;
        _this._forceDestroy = config.forceDestroy;
        _this._location = config.location;
        _this._name = config.name;
        _this._providerName = config.providerName;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(DxLag.prototype, "arn", {
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
    Object.defineProperty(DxLag.prototype, "connectionId", {
        get: function () {
            return this.getStringAttribute('connection_id');
        },
        set: function (value) {
            this._connectionId = value;
        },
        enumerable: false,
        configurable: true
    });
    DxLag.prototype.resetConnectionId = function () {
        this._connectionId = undefined;
    };
    Object.defineProperty(DxLag.prototype, "connectionIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._connectionId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxLag.prototype, "connectionsBandwidth", {
        get: function () {
            return this.getStringAttribute('connections_bandwidth');
        },
        set: function (value) {
            this._connectionsBandwidth = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxLag.prototype, "connectionsBandwidthInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._connectionsBandwidth;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxLag.prototype, "forceDestroy", {
        get: function () {
            return this.getBooleanAttribute('force_destroy');
        },
        set: function (value) {
            this._forceDestroy = value;
        },
        enumerable: false,
        configurable: true
    });
    DxLag.prototype.resetForceDestroy = function () {
        this._forceDestroy = undefined;
    };
    Object.defineProperty(DxLag.prototype, "forceDestroyInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._forceDestroy;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxLag.prototype, "hasLogicalRedundancy", {
        // has_logical_redundancy - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('has_logical_redundancy');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxLag.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxLag.prototype, "jumboFrameCapable", {
        // jumbo_frame_capable - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('jumbo_frame_capable');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxLag.prototype, "location", {
        get: function () {
            return this.getStringAttribute('location');
        },
        set: function (value) {
            this._location = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxLag.prototype, "locationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._location;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxLag.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxLag.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxLag.prototype, "ownerAccountId", {
        // owner_account_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_account_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxLag.prototype, "providerName", {
        get: function () {
            return this.getStringAttribute('provider_name');
        },
        set: function (value) {
            this._providerName = value;
        },
        enumerable: false,
        configurable: true
    });
    DxLag.prototype.resetProviderName = function () {
        this._providerName = undefined;
    };
    Object.defineProperty(DxLag.prototype, "providerNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._providerName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxLag.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DxLag.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DxLag.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxLag.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    DxLag.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(DxLag.prototype, "tagsAllInput", {
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
    DxLag.prototype.synthesizeAttributes = function () {
        return {
            connection_id: cdktf.stringToTerraform(this._connectionId),
            connections_bandwidth: cdktf.stringToTerraform(this._connectionsBandwidth),
            force_destroy: cdktf.booleanToTerraform(this._forceDestroy),
            location: cdktf.stringToTerraform(this._location),
            name: cdktf.stringToTerraform(this._name),
            provider_name: cdktf.stringToTerraform(this._providerName),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DxLag.tfResourceType = "aws_dx_lag";
    return DxLag;
}(cdktf.TerraformResource));
exports.DxLag = DxLag;
