"use strict";
// https://www.terraform.io/docs/providers/aws/d/vpc_dhcp_options.html
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
exports.DataAwsVpcDhcpOptions = void 0;
var cdktf = require("cdktf");
function dataAwsVpcDhcpOptionsFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/vpc_dhcp_options.html aws_vpc_dhcp_options}
*/
var DataAwsVpcDhcpOptions = /** @class */ (function (_super) {
    __extends(DataAwsVpcDhcpOptions, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/vpc_dhcp_options.html aws_vpc_dhcp_options} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsVpcDhcpOptionsConfig = {}
    */
    function DataAwsVpcDhcpOptions(scope, id, config) {
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
        _this._dhcpOptionsId = config.dhcpOptionsId;
        _this._tags = config.tags;
        _this._filter = config.filter;
        return _this;
    }
    Object.defineProperty(DataAwsVpcDhcpOptions.prototype, "arn", {
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
    Object.defineProperty(DataAwsVpcDhcpOptions.prototype, "dhcpOptionsId", {
        get: function () {
            return this.getStringAttribute('dhcp_options_id');
        },
        set: function (value) {
            this._dhcpOptionsId = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsVpcDhcpOptions.prototype.resetDhcpOptionsId = function () {
        this._dhcpOptionsId = undefined;
    };
    Object.defineProperty(DataAwsVpcDhcpOptions.prototype, "dhcpOptionsIdInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._dhcpOptionsId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpcDhcpOptions.prototype, "domainName", {
        // domain_name - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('domain_name');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpcDhcpOptions.prototype, "domainNameServers", {
        // domain_name_servers - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('domain_name_servers');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpcDhcpOptions.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpcDhcpOptions.prototype, "netbiosNameServers", {
        // netbios_name_servers - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('netbios_name_servers');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpcDhcpOptions.prototype, "netbiosNodeType", {
        // netbios_node_type - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('netbios_node_type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpcDhcpOptions.prototype, "ntpServers", {
        // ntp_servers - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('ntp_servers');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpcDhcpOptions.prototype, "ownerId", {
        // owner_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('owner_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpcDhcpOptions.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsVpcDhcpOptions.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsVpcDhcpOptions.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsVpcDhcpOptions.prototype, "filter", {
        get: function () {
            return this.interpolationForAttribute('filter');
        },
        set: function (value) {
            this._filter = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsVpcDhcpOptions.prototype.resetFilter = function () {
        this._filter = undefined;
    };
    Object.defineProperty(DataAwsVpcDhcpOptions.prototype, "filterInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._filter;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    DataAwsVpcDhcpOptions.prototype.synthesizeAttributes = function () {
        return {
            dhcp_options_id: cdktf.stringToTerraform(this._dhcpOptionsId),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            filter: cdktf.listMapper(dataAwsVpcDhcpOptionsFilterToTerraform)(this._filter)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsVpcDhcpOptions.tfResourceType = "aws_vpc_dhcp_options";
    return DataAwsVpcDhcpOptions;
}(cdktf.TerraformDataSource));
exports.DataAwsVpcDhcpOptions = DataAwsVpcDhcpOptions;
