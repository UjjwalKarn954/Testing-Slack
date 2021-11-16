"use strict";
// https://www.terraform.io/docs/providers/aws/r/service_discovery_public_dns_namespace.html
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
exports.ServiceDiscoveryPublicDnsNamespace = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_public_dns_namespace.html aws_service_discovery_public_dns_namespace}
*/
var ServiceDiscoveryPublicDnsNamespace = /** @class */ (function (_super) {
    __extends(ServiceDiscoveryPublicDnsNamespace, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_public_dns_namespace.html aws_service_discovery_public_dns_namespace} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServiceDiscoveryPublicDnsNamespaceConfig
    */
    function ServiceDiscoveryPublicDnsNamespace(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_service_discovery_public_dns_namespace',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._description = config.description;
        _this._name = config.name;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(ServiceDiscoveryPublicDnsNamespace.prototype, "arn", {
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
    Object.defineProperty(ServiceDiscoveryPublicDnsNamespace.prototype, "description", {
        get: function () {
            return this.getStringAttribute('description');
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceDiscoveryPublicDnsNamespace.prototype.resetDescription = function () {
        this._description = undefined;
    };
    Object.defineProperty(ServiceDiscoveryPublicDnsNamespace.prototype, "descriptionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceDiscoveryPublicDnsNamespace.prototype, "hostedZone", {
        // hosted_zone - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('hosted_zone');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceDiscoveryPublicDnsNamespace.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceDiscoveryPublicDnsNamespace.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceDiscoveryPublicDnsNamespace.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceDiscoveryPublicDnsNamespace.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceDiscoveryPublicDnsNamespace.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(ServiceDiscoveryPublicDnsNamespace.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceDiscoveryPublicDnsNamespace.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    ServiceDiscoveryPublicDnsNamespace.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(ServiceDiscoveryPublicDnsNamespace.prototype, "tagsAllInput", {
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
    ServiceDiscoveryPublicDnsNamespace.prototype.synthesizeAttributes = function () {
        return {
            description: cdktf.stringToTerraform(this._description),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    ServiceDiscoveryPublicDnsNamespace.tfResourceType = "aws_service_discovery_public_dns_namespace";
    return ServiceDiscoveryPublicDnsNamespace;
}(cdktf.TerraformResource));
exports.ServiceDiscoveryPublicDnsNamespace = ServiceDiscoveryPublicDnsNamespace;
