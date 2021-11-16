"use strict";
// https://www.terraform.io/docs/providers/aws/d/codestarconnections_connection.html
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
exports.DataAwsCodestarconnectionsConnection = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/codestarconnections_connection.html aws_codestarconnections_connection}
*/
var DataAwsCodestarconnectionsConnection = /** @class */ (function (_super) {
    __extends(DataAwsCodestarconnectionsConnection, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/codestarconnections_connection.html aws_codestarconnections_connection} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCodestarconnectionsConnectionConfig
    */
    function DataAwsCodestarconnectionsConnection(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_codestarconnections_connection',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._arn = config.arn;
        _this._tags = config.tags;
        return _this;
    }
    Object.defineProperty(DataAwsCodestarconnectionsConnection.prototype, "arn", {
        get: function () {
            return this.getStringAttribute('arn');
        },
        set: function (value) {
            this._arn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCodestarconnectionsConnection.prototype, "arnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._arn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCodestarconnectionsConnection.prototype, "connectionStatus", {
        // connection_status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('connection_status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCodestarconnectionsConnection.prototype, "hostArn", {
        // host_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('host_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCodestarconnectionsConnection.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCodestarconnectionsConnection.prototype, "name", {
        // name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCodestarconnectionsConnection.prototype, "providerType", {
        // provider_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('provider_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCodestarconnectionsConnection.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsCodestarconnectionsConnection.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsCodestarconnectionsConnection.prototype, "tagsInput", {
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
    DataAwsCodestarconnectionsConnection.prototype.synthesizeAttributes = function () {
        return {
            arn: cdktf.stringToTerraform(this._arn),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsCodestarconnectionsConnection.tfResourceType = "aws_codestarconnections_connection";
    return DataAwsCodestarconnectionsConnection;
}(cdktf.TerraformDataSource));
exports.DataAwsCodestarconnectionsConnection = DataAwsCodestarconnectionsConnection;
