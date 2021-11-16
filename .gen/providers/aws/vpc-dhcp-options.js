"use strict";
// https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options.html
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
exports.VpcDhcpOptions = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options.html aws_vpc_dhcp_options}
*/
var VpcDhcpOptions = /** @class */ (function (_super) {
    __extends(VpcDhcpOptions, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_dhcp_options.html aws_vpc_dhcp_options} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VpcDhcpOptionsConfig = {}
    */
    function VpcDhcpOptions(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_vpc_dhcp_options',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._domainName = config.domainName;
        _this._domainNameServers = config.domainNameServers;
        _this._netbiosNameServers = config.netbiosNameServers;
        _this._netbiosNodeType = config.netbiosNodeType;
        _this._ntpServers = config.ntpServers;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(VpcDhcpOptions.prototype, "arn", {
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
    Object.defineProperty(VpcDhcpOptions.prototype, "domainName", {
        get: function () {
            return this.getStringAttribute('domain_name');
        },
        set: function (value) {
            this._domainName = value;
        },
        enumerable: false,
        configurable: true
    });
    VpcDhcpOptions.prototype.resetDomainName = function () {
        this._domainName = undefined;
    };
    Object.defineProperty(VpcDhcpOptions.prototype, "domainNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domainName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcDhcpOptions.prototype, "domainNameServers", {
        get: function () {
            return this.getListAttribute('domain_name_servers');
        },
        set: function (value) {
            this._domainNameServers = value;
        },
        enumerable: false,
        configurable: true
    });
    VpcDhcpOptions.prototype.resetDomainNameServers = function () {
        this._domainNameServers = undefined;
    };
    Object.defineProperty(VpcDhcpOptions.prototype, "domainNameServersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._domainNameServers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcDhcpOptions.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcDhcpOptions.prototype, "netbiosNameServers", {
        get: function () {
            return this.getListAttribute('netbios_name_servers');
        },
        set: function (value) {
            this._netbiosNameServers = value;
        },
        enumerable: false,
        configurable: true
    });
    VpcDhcpOptions.prototype.resetNetbiosNameServers = function () {
        this._netbiosNameServers = undefined;
    };
    Object.defineProperty(VpcDhcpOptions.prototype, "netbiosNameServersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._netbiosNameServers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcDhcpOptions.prototype, "netbiosNodeType", {
        get: function () {
            return this.getStringAttribute('netbios_node_type');
        },
        set: function (value) {
            this._netbiosNodeType = value;
        },
        enumerable: false,
        configurable: true
    });
    VpcDhcpOptions.prototype.resetNetbiosNodeType = function () {
        this._netbiosNodeType = undefined;
    };
    Object.defineProperty(VpcDhcpOptions.prototype, "netbiosNodeTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._netbiosNodeType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcDhcpOptions.prototype, "ntpServers", {
        get: function () {
            return this.getListAttribute('ntp_servers');
        },
        set: function (value) {
            this._ntpServers = value;
        },
        enumerable: false,
        configurable: true
    });
    VpcDhcpOptions.prototype.resetNtpServers = function () {
        this._ntpServers = undefined;
    };
    Object.defineProperty(VpcDhcpOptions.prototype, "ntpServersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ntpServers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcDhcpOptions.prototype, "ownerId", {
        // owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcDhcpOptions.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    VpcDhcpOptions.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(VpcDhcpOptions.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VpcDhcpOptions.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    VpcDhcpOptions.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(VpcDhcpOptions.prototype, "tagsAllInput", {
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
    VpcDhcpOptions.prototype.synthesizeAttributes = function () {
        return {
            domain_name: cdktf.stringToTerraform(this._domainName),
            domain_name_servers: cdktf.listMapper(cdktf.stringToTerraform)(this._domainNameServers),
            netbios_name_servers: cdktf.listMapper(cdktf.stringToTerraform)(this._netbiosNameServers),
            netbios_node_type: cdktf.stringToTerraform(this._netbiosNodeType),
            ntp_servers: cdktf.listMapper(cdktf.stringToTerraform)(this._ntpServers),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    VpcDhcpOptions.tfResourceType = "aws_vpc_dhcp_options";
    return VpcDhcpOptions;
}(cdktf.TerraformResource));
exports.VpcDhcpOptions = VpcDhcpOptions;
