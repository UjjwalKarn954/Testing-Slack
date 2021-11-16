"use strict";
// https://www.terraform.io/docs/providers/aws/r/codestarconnections_connection.html
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
exports.CodestarconnectionsConnection = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_connection.html aws_codestarconnections_connection}
*/
var CodestarconnectionsConnection = /** @class */ (function (_super) {
    __extends(CodestarconnectionsConnection, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_connection.html aws_codestarconnections_connection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodestarconnectionsConnectionConfig
    */
    function CodestarconnectionsConnection(scope, id, config) {
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
        _this._hostArn = config.hostArn;
        _this._name = config.name;
        _this._providerType = config.providerType;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(CodestarconnectionsConnection.prototype, "arn", {
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
    Object.defineProperty(CodestarconnectionsConnection.prototype, "connectionStatus", {
        // connection_status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('connection_status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodestarconnectionsConnection.prototype, "hostArn", {
        get: function () {
            return this.getStringAttribute('host_arn');
        },
        set: function (value) {
            this._hostArn = value;
        },
        enumerable: false,
        configurable: true
    });
    CodestarconnectionsConnection.prototype.resetHostArn = function () {
        this._hostArn = undefined;
    };
    Object.defineProperty(CodestarconnectionsConnection.prototype, "hostArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._hostArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodestarconnectionsConnection.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodestarconnectionsConnection.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodestarconnectionsConnection.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodestarconnectionsConnection.prototype, "providerType", {
        get: function () {
            return this.getStringAttribute('provider_type');
        },
        set: function (value) {
            this._providerType = value;
        },
        enumerable: false,
        configurable: true
    });
    CodestarconnectionsConnection.prototype.resetProviderType = function () {
        this._providerType = undefined;
    };
    Object.defineProperty(CodestarconnectionsConnection.prototype, "providerTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._providerType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodestarconnectionsConnection.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    CodestarconnectionsConnection.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(CodestarconnectionsConnection.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CodestarconnectionsConnection.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    CodestarconnectionsConnection.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(CodestarconnectionsConnection.prototype, "tagsAllInput", {
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
    CodestarconnectionsConnection.prototype.synthesizeAttributes = function () {
        return {
            host_arn: cdktf.stringToTerraform(this._hostArn),
            name: cdktf.stringToTerraform(this._name),
            provider_type: cdktf.stringToTerraform(this._providerType),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CodestarconnectionsConnection.tfResourceType = "aws_codestarconnections_connection";
    return CodestarconnectionsConnection;
}(cdktf.TerraformResource));
exports.CodestarconnectionsConnection = CodestarconnectionsConnection;
