"use strict";
// https://www.terraform.io/docs/providers/aws/r/directory_service_conditional_forwarder.html
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
exports.DirectoryServiceConditionalForwarder = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/directory_service_conditional_forwarder.html aws_directory_service_conditional_forwarder}
*/
var DirectoryServiceConditionalForwarder = /** @class */ (function (_super) {
    __extends(DirectoryServiceConditionalForwarder, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/directory_service_conditional_forwarder.html aws_directory_service_conditional_forwarder} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DirectoryServiceConditionalForwarderConfig
    */
    function DirectoryServiceConditionalForwarder(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_directory_service_conditional_forwarder',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._directoryId = config.directoryId;
        _this._dnsIps = config.dnsIps;
        _this._remoteDomainName = config.remoteDomainName;
        return _this;
    }
    Object.defineProperty(DirectoryServiceConditionalForwarder.prototype, "directoryId", {
        get: function () {
            return this.getStringAttribute('directory_id');
        },
        set: function (value) {
            this._directoryId = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DirectoryServiceConditionalForwarder.prototype, "directoryIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._directoryId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DirectoryServiceConditionalForwarder.prototype, "dnsIps", {
        get: function () {
            return this.getListAttribute('dns_ips');
        },
        set: function (value) {
            this._dnsIps = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DirectoryServiceConditionalForwarder.prototype, "dnsIpsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dnsIps;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DirectoryServiceConditionalForwarder.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DirectoryServiceConditionalForwarder.prototype, "remoteDomainName", {
        get: function () {
            return this.getStringAttribute('remote_domain_name');
        },
        set: function (value) {
            this._remoteDomainName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DirectoryServiceConditionalForwarder.prototype, "remoteDomainNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._remoteDomainName;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DirectoryServiceConditionalForwarder.prototype.synthesizeAttributes = function () {
        return {
            directory_id: cdktf.stringToTerraform(this._directoryId),
            dns_ips: cdktf.listMapper(cdktf.stringToTerraform)(this._dnsIps),
            remote_domain_name: cdktf.stringToTerraform(this._remoteDomainName)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DirectoryServiceConditionalForwarder.tfResourceType = "aws_directory_service_conditional_forwarder";
    return DirectoryServiceConditionalForwarder;
}(cdktf.TerraformResource));
exports.DirectoryServiceConditionalForwarder = DirectoryServiceConditionalForwarder;
