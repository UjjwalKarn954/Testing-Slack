"use strict";
// https://www.terraform.io/docs/providers/aws/d/eks_cluster.html
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
exports.DataAwsEksCluster = exports.DataAwsEksClusterVpcConfig = exports.DataAwsEksClusterKubernetesNetworkConfig = exports.DataAwsEksClusterIdentity = exports.DataAwsEksClusterIdentityOidc = exports.DataAwsEksClusterCertificateAuthority = void 0;
var cdktf = require("cdktf");
var DataAwsEksClusterCertificateAuthority = /** @class */ (function (_super) {
    __extends(DataAwsEksClusterCertificateAuthority, _super);
    function DataAwsEksClusterCertificateAuthority() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsEksClusterCertificateAuthority.prototype, "data", {
        // data - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('data');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsEksClusterCertificateAuthority;
}(cdktf.ComplexComputedList));
exports.DataAwsEksClusterCertificateAuthority = DataAwsEksClusterCertificateAuthority;
var DataAwsEksClusterIdentityOidc = /** @class */ (function (_super) {
    __extends(DataAwsEksClusterIdentityOidc, _super);
    function DataAwsEksClusterIdentityOidc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsEksClusterIdentityOidc.prototype, "issuer", {
        // issuer - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('issuer');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsEksClusterIdentityOidc;
}(cdktf.ComplexComputedList));
exports.DataAwsEksClusterIdentityOidc = DataAwsEksClusterIdentityOidc;
var DataAwsEksClusterIdentity = /** @class */ (function (_super) {
    __extends(DataAwsEksClusterIdentity, _super);
    function DataAwsEksClusterIdentity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsEksClusterIdentity.prototype, "oidc", {
        // oidc - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('oidc');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsEksClusterIdentity;
}(cdktf.ComplexComputedList));
exports.DataAwsEksClusterIdentity = DataAwsEksClusterIdentity;
var DataAwsEksClusterKubernetesNetworkConfig = /** @class */ (function (_super) {
    __extends(DataAwsEksClusterKubernetesNetworkConfig, _super);
    function DataAwsEksClusterKubernetesNetworkConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsEksClusterKubernetesNetworkConfig.prototype, "serviceIpv4Cidr", {
        // service_ipv4_cidr - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('service_ipv4_cidr');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsEksClusterKubernetesNetworkConfig;
}(cdktf.ComplexComputedList));
exports.DataAwsEksClusterKubernetesNetworkConfig = DataAwsEksClusterKubernetesNetworkConfig;
var DataAwsEksClusterVpcConfig = /** @class */ (function (_super) {
    __extends(DataAwsEksClusterVpcConfig, _super);
    function DataAwsEksClusterVpcConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataAwsEksClusterVpcConfig.prototype, "clusterSecurityGroupId", {
        // cluster_security_group_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('cluster_security_group_id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEksClusterVpcConfig.prototype, "endpointPrivateAccess", {
        // endpoint_private_access - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('endpoint_private_access');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEksClusterVpcConfig.prototype, "endpointPublicAccess", {
        // endpoint_public_access - computed: true, optional: false, required: false
        get: function () {
            return this.getBooleanAttribute('endpoint_public_access');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEksClusterVpcConfig.prototype, "publicAccessCidrs", {
        // public_access_cidrs - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('public_access_cidrs');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEksClusterVpcConfig.prototype, "securityGroupIds", {
        // security_group_ids - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('security_group_ids');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEksClusterVpcConfig.prototype, "subnetIds", {
        // subnet_ids - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('subnet_ids');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEksClusterVpcConfig.prototype, "vpcId", {
        // vpc_id - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('vpc_id');
        },
        enumerable: false,
        configurable: true
    });
    return DataAwsEksClusterVpcConfig;
}(cdktf.ComplexComputedList));
exports.DataAwsEksClusterVpcConfig = DataAwsEksClusterVpcConfig;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/eks_cluster.html aws_eks_cluster}
*/
var DataAwsEksCluster = /** @class */ (function (_super) {
    __extends(DataAwsEksCluster, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/eks_cluster.html aws_eks_cluster} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEksClusterConfig
    */
    function DataAwsEksCluster(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_eks_cluster',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._name = config.name;
        _this._tags = config.tags;
        return _this;
    }
    Object.defineProperty(DataAwsEksCluster.prototype, "arn", {
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
    // certificate_authority - computed: true, optional: false, required: false
    DataAwsEksCluster.prototype.certificateAuthority = function (index) {
        return new DataAwsEksClusterCertificateAuthority(this, 'certificate_authority', index);
    };
    Object.defineProperty(DataAwsEksCluster.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEksCluster.prototype, "enabledClusterLogTypes", {
        // enabled_cluster_log_types - computed: true, optional: false, required: false
        get: function () {
            return this.getListAttribute('enabled_cluster_log_types');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEksCluster.prototype, "endpoint", {
        // endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('endpoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEksCluster.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    // identity - computed: true, optional: false, required: false
    DataAwsEksCluster.prototype.identity = function (index) {
        return new DataAwsEksClusterIdentity(this, 'identity', index);
    };
    // kubernetes_network_config - computed: true, optional: false, required: false
    DataAwsEksCluster.prototype.kubernetesNetworkConfig = function (index) {
        return new DataAwsEksClusterKubernetesNetworkConfig(this, 'kubernetes_network_config', index);
    };
    Object.defineProperty(DataAwsEksCluster.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEksCluster.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEksCluster.prototype, "platformVersion", {
        // platform_version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('platform_version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEksCluster.prototype, "roleArn", {
        // role_arn - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('role_arn');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEksCluster.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEksCluster.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    DataAwsEksCluster.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(DataAwsEksCluster.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataAwsEksCluster.prototype, "version", {
        // version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('version');
        },
        enumerable: false,
        configurable: true
    });
    // vpc_config - computed: true, optional: false, required: false
    DataAwsEksCluster.prototype.vpcConfig = function (index) {
        return new DataAwsEksClusterVpcConfig(this, 'vpc_config', index);
    };
    // =========
    // SYNTHESIS
    // =========
    DataAwsEksCluster.prototype.synthesizeAttributes = function () {
        return {
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    DataAwsEksCluster.tfResourceType = "aws_eks_cluster";
    return DataAwsEksCluster;
}(cdktf.TerraformDataSource));
exports.DataAwsEksCluster = DataAwsEksCluster;
