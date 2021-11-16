"use strict";
// https://www.terraform.io/docs/providers/aws/r/apprunner_connection.html
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
exports.ApprunnerConnection = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/apprunner_connection.html aws_apprunner_connection}
*/
var ApprunnerConnection = /** @class */ (function (_super) {
    __extends(ApprunnerConnection, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apprunner_connection.html aws_apprunner_connection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApprunnerConnectionConfig
    */
    function ApprunnerConnection(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_apprunner_connection',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._connectionName = config.connectionName;
        _this._providerType = config.providerType;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(ApprunnerConnection.prototype, "arn", {
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
    Object.defineProperty(ApprunnerConnection.prototype, "connectionName", {
        get: function () {
            return this.getStringAttribute('connection_name');
        },
        set: function (value) {
            this._connectionName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApprunnerConnection.prototype, "connectionNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._connectionName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApprunnerConnection.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApprunnerConnection.prototype, "providerType", {
        get: function () {
            return this.getStringAttribute('provider_type');
        },
        set: function (value) {
            this._providerType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApprunnerConnection.prototype, "providerTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._providerType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApprunnerConnection.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApprunnerConnection.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    ApprunnerConnection.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(ApprunnerConnection.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ApprunnerConnection.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    ApprunnerConnection.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(ApprunnerConnection.prototype, "tagsAllInput", {
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
    ApprunnerConnection.prototype.synthesizeAttributes = function () {
        return {
            connection_name: cdktf.stringToTerraform(this._connectionName),
            provider_type: cdktf.stringToTerraform(this._providerType),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ApprunnerConnection.tfResourceType = "aws_apprunner_connection";
    return ApprunnerConnection;
}(cdktf.TerraformResource));
exports.ApprunnerConnection = ApprunnerConnection;
