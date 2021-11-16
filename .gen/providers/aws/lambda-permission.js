"use strict";
// https://www.terraform.io/docs/providers/aws/r/lambda_permission.html
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
exports.LambdaPermission = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission.html aws_lambda_permission}
*/
var LambdaPermission = /** @class */ (function (_super) {
    __extends(LambdaPermission, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lambda_permission.html aws_lambda_permission} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LambdaPermissionConfig
    */
    function LambdaPermission(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_lambda_permission',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._action = config.action;
        _this._eventSourceToken = config.eventSourceToken;
        _this._functionName = config.functionName;
        _this._principal = config.principal;
        _this._qualifier = config.qualifier;
        _this._sourceAccount = config.sourceAccount;
        _this._sourceArn = config.sourceArn;
        _this._statementId = config.statementId;
        _this._statementIdPrefix = config.statementIdPrefix;
        return _this;
    }
    Object.defineProperty(LambdaPermission.prototype, "action", {
        get: function () {
            return this.getStringAttribute('action');
        },
        set: function (value) {
            this._action = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaPermission.prototype, "actionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._action;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaPermission.prototype, "eventSourceToken", {
        get: function () {
            return this.getStringAttribute('event_source_token');
        },
        set: function (value) {
            this._eventSourceToken = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaPermission.prototype.resetEventSourceToken = function () {
        this._eventSourceToken = undefined;
    };
    Object.defineProperty(LambdaPermission.prototype, "eventSourceTokenInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._eventSourceToken;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaPermission.prototype, "functionName", {
        get: function () {
            return this.getStringAttribute('function_name');
        },
        set: function (value) {
            this._functionName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaPermission.prototype, "functionNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._functionName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaPermission.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaPermission.prototype, "principal", {
        get: function () {
            return this.getStringAttribute('principal');
        },
        set: function (value) {
            this._principal = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaPermission.prototype, "principalInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._principal;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaPermission.prototype, "qualifier", {
        get: function () {
            return this.getStringAttribute('qualifier');
        },
        set: function (value) {
            this._qualifier = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaPermission.prototype.resetQualifier = function () {
        this._qualifier = undefined;
    };
    Object.defineProperty(LambdaPermission.prototype, "qualifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._qualifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaPermission.prototype, "sourceAccount", {
        get: function () {
            return this.getStringAttribute('source_account');
        },
        set: function (value) {
            this._sourceAccount = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaPermission.prototype.resetSourceAccount = function () {
        this._sourceAccount = undefined;
    };
    Object.defineProperty(LambdaPermission.prototype, "sourceAccountInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sourceAccount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaPermission.prototype, "sourceArn", {
        get: function () {
            return this.getStringAttribute('source_arn');
        },
        set: function (value) {
            this._sourceArn = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaPermission.prototype.resetSourceArn = function () {
        this._sourceArn = undefined;
    };
    Object.defineProperty(LambdaPermission.prototype, "sourceArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._sourceArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaPermission.prototype, "statementId", {
        get: function () {
            return this.getStringAttribute('statement_id');
        },
        set: function (value) {
            this._statementId = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaPermission.prototype.resetStatementId = function () {
        this._statementId = undefined;
    };
    Object.defineProperty(LambdaPermission.prototype, "statementIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._statementId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LambdaPermission.prototype, "statementIdPrefix", {
        get: function () {
            return this.getStringAttribute('statement_id_prefix');
        },
        set: function (value) {
            this._statementIdPrefix = value;
        },
        enumerable: false,
        configurable: true
    });
    LambdaPermission.prototype.resetStatementIdPrefix = function () {
        this._statementIdPrefix = undefined;
    };
    Object.defineProperty(LambdaPermission.prototype, "statementIdPrefixInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._statementIdPrefix;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    LambdaPermission.prototype.synthesizeAttributes = function () {
        return {
            action: cdktf.stringToTerraform(this._action),
            event_source_token: cdktf.stringToTerraform(this._eventSourceToken),
            function_name: cdktf.stringToTerraform(this._functionName),
            principal: cdktf.stringToTerraform(this._principal),
            qualifier: cdktf.stringToTerraform(this._qualifier),
            source_account: cdktf.stringToTerraform(this._sourceAccount),
            source_arn: cdktf.stringToTerraform(this._sourceArn),
            statement_id: cdktf.stringToTerraform(this._statementId),
            statement_id_prefix: cdktf.stringToTerraform(this._statementIdPrefix)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    LambdaPermission.tfResourceType = "aws_lambda_permission";
    return LambdaPermission;
}(cdktf.TerraformResource));
exports.LambdaPermission = LambdaPermission;
