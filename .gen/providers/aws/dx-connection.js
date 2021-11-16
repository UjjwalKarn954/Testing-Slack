"use strict";
// https://www.terraform.io/docs/providers/aws/r/dx_connection.html
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
exports.DxConnection = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_connection.html aws_dx_connection}
*/
var DxConnection = /** @class */ (function (_super) {
    __extends(DxConnection, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_connection.html aws_dx_connection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DxConnectionConfig
    */
    function DxConnection(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_dx_connection',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._bandwidth = config.bandwidth;
        _this._location = config.location;
        _this._name = config.name;
        _this._providerName = config.providerName;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(DxConnection.prototype, "arn", {
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
    Object.defineProperty(DxConnection.prototype, "awsDevice", {
        // aws_device - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('aws_device');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxConnection.prototype, "bandwidth", {
        get: function () {
            return this.getStringAttribute('bandwidth');
        },
        set: function (value) {
            this._bandwidth = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxConnection.prototype, "bandwidthInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._bandwidth;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxConnection.prototype, "hasLogicalRedundancy", {
        // has_logical_redundancy - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('has_logical_redundancy');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxConnection.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxConnection.prototype, "jumboFrameCapable", {
        // jumbo_frame_capable - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('jumbo_frame_capable');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxConnection.prototype, "location", {
        get: function () {
            return this.getStringAttribute('location');
        },
        set: function (value) {
            this._location = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxConnection.prototype, "locationInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._location;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxConnection.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxConnection.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxConnection.prototype, "ownerAccountId", {
        // owner_account_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_account_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxConnection.prototype, "providerName", {
        get: function () {
            return this.getStringAttribute('provider_name');
        },
        set: function (value) {
            this._providerName = value;
        },
        enumerable: false,
        configurable: true
    });
    DxConnection.prototype.resetProviderName = function () {
        this._providerName = undefined;
    };
    Object.defineProperty(DxConnection.prototype, "providerNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._providerName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxConnection.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DxConnection.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DxConnection.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DxConnection.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    DxConnection.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(DxConnection.prototype, "tagsAllInput", {
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
    DxConnection.prototype.synthesizeAttributes = function () {
        return {
            bandwidth: cdktf.stringToTerraform(this._bandwidth),
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
    DxConnection.tfResourceType = "aws_dx_connection";
    return DxConnection;
}(cdktf.TerraformResource));
exports.DxConnection = DxConnection;
