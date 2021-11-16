"use strict";
// https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint.html
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
exports.NeptuneClusterEndpoint = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint.html aws_neptune_cluster_endpoint}
*/
var NeptuneClusterEndpoint = /** @class */ (function (_super) {
    __extends(NeptuneClusterEndpoint, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/neptune_cluster_endpoint.html aws_neptune_cluster_endpoint} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options NeptuneClusterEndpointConfig
    */
    function NeptuneClusterEndpoint(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_neptune_cluster_endpoint',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._clusterEndpointIdentifier = config.clusterEndpointIdentifier;
        _this._clusterIdentifier = config.clusterIdentifier;
        _this._endpointType = config.endpointType;
        _this._excludedMembers = config.excludedMembers;
        _this._staticMembers = config.staticMembers;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        return _this;
    }
    Object.defineProperty(NeptuneClusterEndpoint.prototype, "arn", {
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
    Object.defineProperty(NeptuneClusterEndpoint.prototype, "clusterEndpointIdentifier", {
        get: function () {
            return this.getStringAttribute('cluster_endpoint_identifier');
        },
        set: function (value) {
            this._clusterEndpointIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneClusterEndpoint.prototype, "clusterEndpointIdentifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clusterEndpointIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneClusterEndpoint.prototype, "clusterIdentifier", {
        get: function () {
            return this.getStringAttribute('cluster_identifier');
        },
        set: function (value) {
            this._clusterIdentifier = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneClusterEndpoint.prototype, "clusterIdentifierInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clusterIdentifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneClusterEndpoint.prototype, "endpoint", {
        // endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('endpoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneClusterEndpoint.prototype, "endpointType", {
        get: function () {
            return this.getStringAttribute('endpoint_type');
        },
        set: function (value) {
            this._endpointType = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneClusterEndpoint.prototype, "endpointTypeInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._endpointType;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneClusterEndpoint.prototype, "excludedMembers", {
        get: function () {
            return this.getListAttribute('excluded_members');
        },
        set: function (value) {
            this._excludedMembers = value;
        },
        enumerable: false,
        configurable: true
    });
    NeptuneClusterEndpoint.prototype.resetExcludedMembers = function () {
        this._excludedMembers = undefined;
    };
    Object.defineProperty(NeptuneClusterEndpoint.prototype, "excludedMembersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._excludedMembers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneClusterEndpoint.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneClusterEndpoint.prototype, "staticMembers", {
        get: function () {
            return this.getListAttribute('static_members');
        },
        set: function (value) {
            this._staticMembers = value;
        },
        enumerable: false,
        configurable: true
    });
    NeptuneClusterEndpoint.prototype.resetStaticMembers = function () {
        this._staticMembers = undefined;
    };
    Object.defineProperty(NeptuneClusterEndpoint.prototype, "staticMembersInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._staticMembers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneClusterEndpoint.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    NeptuneClusterEndpoint.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(NeptuneClusterEndpoint.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NeptuneClusterEndpoint.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    NeptuneClusterEndpoint.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(NeptuneClusterEndpoint.prototype, "tagsAllInput", {
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
    NeptuneClusterEndpoint.prototype.synthesizeAttributes = function () {
        return {
            cluster_endpoint_identifier: cdktf.stringToTerraform(this._clusterEndpointIdentifier),
            cluster_identifier: cdktf.stringToTerraform(this._clusterIdentifier),
            endpoint_type: cdktf.stringToTerraform(this._endpointType),
            excluded_members: cdktf.listMapper(cdktf.stringToTerraform)(this._excludedMembers),
            static_members: cdktf.listMapper(cdktf.stringToTerraform)(this._staticMembers),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    NeptuneClusterEndpoint.tfResourceType = "aws_neptune_cluster_endpoint";
    return NeptuneClusterEndpoint;
}(cdktf.TerraformResource));
exports.NeptuneClusterEndpoint = NeptuneClusterEndpoint;
