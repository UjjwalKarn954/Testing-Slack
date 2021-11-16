"use strict";
// https://www.terraform.io/docs/providers/aws/d/codeartifact_authorization_token.html
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
exports.DataAwsCodeartifactAuthorizationToken = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_authorization_token.html aws_codeartifact_authorization_token}
*/
var DataAwsCodeartifactAuthorizationToken = /** @class */ (function (_super) {
    __extends(DataAwsCodeartifactAuthorizationToken, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/codeartifact_authorization_token.html aws_codeartifact_authorization_token} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCodeartifactAuthorizationTokenConfig
    */
    function DataAwsCodeartifactAuthorizationToken(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_codeartifact_authorization_token',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._domain = config.domain;
        _this._domainOwner = config.domainOwner;
        _this._durationSeconds = config.durationSeconds;
        return _this;
    }
    Object.defineProperty(DataAwsCodeartifactAuthorizationToken.prototype, "authorizationToken", {
        // ==========
        // ATTRIBUTES
        // ==========
        // authorization_token - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('authorization_token');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCodeartifactAuthorizationToken.prototype, "domain", {
        get: function () {
            return this.getStringAttribute('domain');
        },
        set: function (value) {
            this._domain = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCodeartifactAuthorizationToken.prototype, "domainInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domain;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCodeartifactAuthorizationToken.prototype, "domainOwner", {
        get: function () {
            return this.getStringAttribute('domain_owner');
        },
        set: function (value) {
            this._domainOwner = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsCodeartifactAuthorizationToken.prototype.resetDomainOwner = function () {
        this._domainOwner = undefined;
    };
    Object.defineProperty(DataAwsCodeartifactAuthorizationToken.prototype, "domainOwnerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domainOwner;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCodeartifactAuthorizationToken.prototype, "durationSeconds", {
        get: function () {
            return this.getNumberAttribute('duration_seconds');
        },
        set: function (value) {
            this._durationSeconds = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsCodeartifactAuthorizationToken.prototype.resetDurationSeconds = function () {
        this._durationSeconds = undefined;
    };
    Object.defineProperty(DataAwsCodeartifactAuthorizationToken.prototype, "durationSecondsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._durationSeconds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCodeartifactAuthorizationToken.prototype, "expiration", {
        // expiration - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('expiration');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsCodeartifactAuthorizationToken.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsCodeartifactAuthorizationToken.prototype.synthesizeAttributes = function () {
        return {
            domain: cdktf.stringToTerraform(this._domain),
            domain_owner: cdktf.stringToTerraform(this._domainOwner),
            duration_seconds: cdktf.numberToTerraform(this._durationSeconds)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsCodeartifactAuthorizationToken.tfResourceType = "aws_codeartifact_authorization_token";
    return DataAwsCodeartifactAuthorizationToken;
}(cdktf.TerraformDataSource));
exports.DataAwsCodeartifactAuthorizationToken = DataAwsCodeartifactAuthorizationToken;
