"use strict";
// https://www.terraform.io/docs/providers/aws/r/default_vpc_dhcp_options.html
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
exports.DefaultVpcDhcpOptions = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/default_vpc_dhcp_options.html aws_default_vpc_dhcp_options}
*/
var DefaultVpcDhcpOptions = /** @class */ (function (_super) {
    __extends(DefaultVpcDhcpOptions, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/default_vpc_dhcp_options.html aws_default_vpc_dhcp_options} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DefaultVpcDhcpOptionsConfig = {}
    */
    function DefaultVpcDhcpOptions(scope, id, config) {
        if (config === void 0) { config = {}; }
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_default_vpc_dhcp_options',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._netbiosNameServers = config.netbiosNameServers;
        _this._netbiosNodeType = config.netbiosNodeType;
        _this._ownerId = config.ownerId;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(DefaultVpcDhcpOptions.prototype, "arn", {
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
    Object.defineProperty(DefaultVpcDhcpOptions.prototype, "domainName", {
        // domain_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('domain_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultVpcDhcpOptions.prototype, "domainNameServers", {
        // domain_name_servers - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('domain_name_servers');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultVpcDhcpOptions.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultVpcDhcpOptions.prototype, "netbiosNameServers", {
        get: function () {
            return this.getListAttribute('netbios_name_servers');
        },
        set: function (value) {
            this._netbiosNameServers = value;
        },
        enumerable: false,
        configurable: true
    });
    DefaultVpcDhcpOptions.prototype.resetNetbiosNameServers = function () {
        this._netbiosNameServers = undefined;
    };
    Object.defineProperty(DefaultVpcDhcpOptions.prototype, "netbiosNameServersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._netbiosNameServers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultVpcDhcpOptions.prototype, "netbiosNodeType", {
        get: function () {
            return this.getStringAttribute('netbios_node_type');
        },
        set: function (value) {
            this._netbiosNodeType = value;
        },
        enumerable: false,
        configurable: true
    });
    DefaultVpcDhcpOptions.prototype.resetNetbiosNodeType = function () {
        this._netbiosNodeType = undefined;
    };
    Object.defineProperty(DefaultVpcDhcpOptions.prototype, "netbiosNodeTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._netbiosNodeType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultVpcDhcpOptions.prototype, "ntpServers", {
        // ntp_servers - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('ntp_servers');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultVpcDhcpOptions.prototype, "ownerId", {
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        set: function (value) {
            this._ownerId = value;
        },
        enumerable: false,
        configurable: true
    });
    DefaultVpcDhcpOptions.prototype.resetOwnerId = function () {
        this._ownerId = undefined;
    };
    Object.defineProperty(DefaultVpcDhcpOptions.prototype, "ownerIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._ownerId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultVpcDhcpOptions.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DefaultVpcDhcpOptions.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DefaultVpcDhcpOptions.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DefaultVpcDhcpOptions.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    DefaultVpcDhcpOptions.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(DefaultVpcDhcpOptions.prototype, "tagsAllInput", {
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
    DefaultVpcDhcpOptions.prototype.synthesizeAttributes = function () {
        return {
            netbios_name_servers: cdktf.listMapper(cdktf.stringToTerraform)(this._netbiosNameServers),
            netbios_node_type: cdktf.stringToTerraform(this._netbiosNodeType),
            owner_id: cdktf.stringToTerraform(this._ownerId),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DefaultVpcDhcpOptions.tfResourceType = "aws_default_vpc_dhcp_options";
    return DefaultVpcDhcpOptions;
}(cdktf.TerraformResource));
exports.DefaultVpcDhcpOptions = DefaultVpcDhcpOptions;
