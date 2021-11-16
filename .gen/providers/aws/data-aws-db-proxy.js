"use strict";
// https://www.terraform.io/docs/providers/aws/d/db_proxy.html
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
exports.DataAwsDbProxy = exports.DataAwsDbProxyAuth = void 0;
var cdktf = require("cdktf");
var DataAwsDbProxyAuth = /** @class */ (function (_super) {
    __extends(DataAwsDbProxyAuth, _super);
    function DataAwsDbProxyAuth() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsDbProxyAuth.prototype, "authScheme", {
        // auth_scheme - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('auth_scheme');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbProxyAuth.prototype, "description", {
        // description - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbProxyAuth.prototype, "iamAuth", {
        // iam_auth - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('iam_auth');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbProxyAuth.prototype, "secretArn", {
        // secret_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('secret_arn');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsDbProxyAuth;
}(cdktf.ComplexComputedList));
exports.DataAwsDbProxyAuth = DataAwsDbProxyAuth;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/db_proxy.html aws_db_proxy}
*/
var DataAwsDbProxy = /** @class */ (function (_super) {
    __extends(DataAwsDbProxy, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/db_proxy.html aws_db_proxy} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsDbProxyConfig
    */
    function DataAwsDbProxy(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_db_proxy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        return _this;
    }
    Object.defineProperty(DataAwsDbProxy.prototype, "arn", {
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
    // auth - computed: true, optional: false, required: false
    DataAwsDbProxy.prototype.auth = function (index) {
        return new DataAwsDbProxyAuth(this, 'auth', index);
    };
    Object.defineProperty(DataAwsDbProxy.prototype, "debugLogging", {
        // debug_logging - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('debug_logging');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbProxy.prototype, "endpoint", {
        // endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('endpoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbProxy.prototype, "engineFamily", {
        // engine_family - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('engine_family');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbProxy.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbProxy.prototype, "idleClientTimeout", {
        // idle_client_timeout - computed: true, optional: false, required: false
        get: function () {
            return this.getNumberAttribute('idle_client_timeout');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbProxy.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbProxy.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbProxy.prototype, "requireTls", {
        // require_tls - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('require_tls');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbProxy.prototype, "roleArn", {
        // role_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('role_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbProxy.prototype, "vpcId", {
        // vpc_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbProxy.prototype, "vpcSecurityGroupIds", {
        // vpc_security_group_ids - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('vpc_security_group_ids');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsDbProxy.prototype, "vpcSubnetIds", {
        // vpc_subnet_ids - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('vpc_subnet_ids');
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsDbProxy.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsDbProxy.tfResourceType = "aws_db_proxy";
    return DataAwsDbProxy;
}(cdktf.TerraformDataSource));
exports.DataAwsDbProxy = DataAwsDbProxy;
