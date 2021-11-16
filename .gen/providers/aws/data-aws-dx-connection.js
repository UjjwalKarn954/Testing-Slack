"use strict";
// https://www.terraform.io/docs/providers/aws/d/dx_connection.html
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
exports.DataAwsDxConnection = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/dx_connection.html aws_dx_connection}
*/
var DataAwsDxConnection = /** @class */ (function (_super) {
    __extends(DataAwsDxConnection, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/dx_connection.html aws_dx_connection} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsDxConnectionConfig
    */
    function DataAwsDxConnection(scope, id, config) {
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
        _this._name = config.name;
        _this._tags = config.tags;
        return _this;
    }
    Object.defineProperty(DataAwsDxConnection.prototype, "arn", {
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
    Object.defineProperty(DataAwsDxConnection.prototype, "awsDevice", {
        // aws_device - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('aws_device');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDxConnection.prototype, "bandwidth", {
        // bandwidth - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('bandwidth');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDxConnection.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDxConnection.prototype, "location", {
        // location - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('location');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDxConnection.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDxConnection.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDxConnection.prototype, "ownerAccountId", {
        // owner_account_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_account_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDxConnection.prototype, "providerName", {
        // provider_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('provider_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDxConnection.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsDxConnection.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsDxConnection.prototype, "tagsInput", {
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
    DataAwsDxConnection.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsDxConnection.tfResourceType = "aws_dx_connection";
    return DataAwsDxConnection;
}(cdktf.TerraformDataSource));
exports.DataAwsDxConnection = DataAwsDxConnection;
