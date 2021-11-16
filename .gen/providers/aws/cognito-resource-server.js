"use strict";
// https://www.terraform.io/docs/providers/aws/r/cognito_resource_server.html
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
exports.CognitoResourceServer = void 0;
var cdktf = require("cdktf");
function cognitoResourceServerScopeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        scope_description: cdktf.stringToTerraform(struct.scopeDescription),
        scope_name: cdktf.stringToTerraform(struct.scopeName)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_resource_server.html aws_cognito_resource_server}
*/
var CognitoResourceServer = /** @class */ (function (_super) {
    __extends(CognitoResourceServer, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cognito_resource_server.html aws_cognito_resource_server} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CognitoResourceServerConfig
    */
    function CognitoResourceServer(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_cognito_resource_server',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._identifier = config.identifier;
        _this._name = config.name;
        _this._userPoolId = config.userPoolId;
        _this._scope = config.scope;
        return _this;
    }
    Object.defineProperty(CognitoResourceServer.prototype, "id", {
        // ==========
        // ATTRIBUTES
        // ==========
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoResourceServer.prototype, "identifier", {
        get: function () {
            return this.getStringAttribute('identifier');
        },
        set: function (value) {
            this._identifier = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoResourceServer.prototype, "identifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._identifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoResourceServer.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoResourceServer.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoResourceServer.prototype, "scopeIdentifiers", {
        // scope_identifiers - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('scope_identifiers');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoResourceServer.prototype, "userPoolId", {
        get: function () {
            return this.getStringAttribute('user_pool_id');
        },
        set: function (value) {
            this._userPoolId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoResourceServer.prototype, "userPoolIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._userPoolId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CognitoResourceServer.prototype, "scope", {
        get: function () {
            return this.interpolationForAttribute('scope');
        },
        set: function (value) {
            this._scope = value;
        },
        enumerable: false,
        configurable: true
    });
    CognitoResourceServer.prototype.resetScope = function () {
        this._scope = undefined;
    };
    Object.defineProperty(CognitoResourceServer.prototype, "scopeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._scope;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    CognitoResourceServer.prototype.synthesizeAttributes = function () {
        return {
            identifier: cdktf.stringToTerraform(this._identifier),
            name: cdktf.stringToTerraform(this._name),
            user_pool_id: cdktf.stringToTerraform(this._userPoolId),
            scope: cdktf.listMapper(cognitoResourceServerScopeToTerraform)(this._scope)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    CognitoResourceServer.tfResourceType = "aws_cognito_resource_server";
    return CognitoResourceServer;
}(cdktf.TerraformResource));
exports.CognitoResourceServer = CognitoResourceServer;
