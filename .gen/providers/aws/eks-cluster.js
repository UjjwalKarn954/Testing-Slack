"use strict";
// https://www.terraform.io/docs/providers/aws/r/eks_cluster.html
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
exports.EksCluster = exports.EksClusterIdentity = exports.EksClusterIdentityOidc = exports.EksClusterCertificateAuthority = void 0;
var cdktf = require("cdktf");
var EksClusterCertificateAuthority = /** @class */ (function (_super) {
    __extends(EksClusterCertificateAuthority, _super);
    function EksClusterCertificateAuthority() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(EksClusterCertificateAuthority.prototype, "data", {
        // data - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('data');
        },
        enumerable: false,
        configurable: true
    });
    return EksClusterCertificateAuthority;
}(cdktf.ComplexComputedList));
exports.EksClusterCertificateAuthority = EksClusterCertificateAuthority;
var EksClusterIdentityOidc = /** @class */ (function (_super) {
    __extends(EksClusterIdentityOidc, _super);
    function EksClusterIdentityOidc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(EksClusterIdentityOidc.prototype, "issuer", {
        // issuer - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('issuer');
        },
        enumerable: false,
        configurable: true
    });
    return EksClusterIdentityOidc;
}(cdktf.ComplexComputedList));
exports.EksClusterIdentityOidc = EksClusterIdentityOidc;
var EksClusterIdentity = /** @class */ (function (_super) {
    __extends(EksClusterIdentity, _super);
    function EksClusterIdentity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(EksClusterIdentity.prototype, "oidc", {
        // oidc - computed: true, optional: false, required: false
        get: function () {
            return this.interpolationForAttribute('oidc');
        },
        enumerable: false,
        configurable: true
    });
    return EksClusterIdentity;
}(cdktf.ComplexComputedList));
exports.EksClusterIdentity = EksClusterIdentity;
function eksClusterEncryptionConfigProviderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        key_arn: cdktf.stringToTerraform(struct.keyArn)
    };
}
function eksClusterEncryptionConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        resources: cdktf.listMapper(cdktf.stringToTerraform)(struct.resources),
        provider: cdktf.listMapper(eksClusterEncryptionConfigProviderToTerraform)(struct.provider)
    };
}
function eksClusterKubernetesNetworkConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        service_ipv4_cidr: cdktf.stringToTerraform(struct.serviceIpv4Cidr)
    };
}
function eksClusterTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        "delete": cdktf.stringToTerraform(struct["delete"]),
        update: cdktf.stringToTerraform(struct.update)
    };
}
function eksClusterVpcConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        endpoint_private_access: cdktf.booleanToTerraform(struct.endpointPrivateAccess),
        endpoint_public_access: cdktf.booleanToTerraform(struct.endpointPublicAccess),
        public_access_cidrs: cdktf.listMapper(cdktf.stringToTerraform)(struct.publicAccessCidrs),
        security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroupIds),
        subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.subnetIds)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html aws_eks_cluster}
*/
var EksCluster = /** @class */ (function (_super) {
    __extends(EksCluster, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/eks_cluster.html aws_eks_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EksClusterConfig
    */
    function EksCluster(scope, id, config) {
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
        _this._enabledClusterLogTypes = config.enabledClusterLogTypes;
        _this._name = config.name;
        _this._roleArn = config.roleArn;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._version = config.version;
        _this._encryptionConfig = config.encryptionConfig;
        _this._kubernetesNetworkConfig = config.kubernetesNetworkConfig;
        _this._timeouts = config.timeouts;
        _this._vpcConfig = config.vpcConfig;
        return _this;
    }
    Object.defineProperty(EksCluster.prototype, "arn", {
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
    EksCluster.prototype.certificateAuthority = function (index) {
        return new EksClusterCertificateAuthority(this, 'certificate_authority', index);
    };
    Object.defineProperty(EksCluster.prototype, "createdAt", {
        // created_at - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_at');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksCluster.prototype, "enabledClusterLogTypes", {
        get: function () {
            return this.getListAttribute('enabled_cluster_log_types');
        },
        set: function (value) {
            this._enabledClusterLogTypes = value;
        },
        enumerable: false,
        configurable: true
    });
    EksCluster.prototype.resetEnabledClusterLogTypes = function () {
        this._enabledClusterLogTypes = undefined;
    };
    Object.defineProperty(EksCluster.prototype, "enabledClusterLogTypesInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._enabledClusterLogTypes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksCluster.prototype, "endpoint", {
        // endpoint - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('endpoint');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksCluster.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    // identity - computed: true, optional: false, required: false
    EksCluster.prototype.identity = function (index) {
        return new EksClusterIdentity(this, 'identity', index);
    };
    Object.defineProperty(EksCluster.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksCluster.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksCluster.prototype, "platformVersion", {
        // platform_version - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('platform_version');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksCluster.prototype, "roleArn", {
        get: function () {
            return this.getStringAttribute('role_arn');
        },
        set: function (value) {
            this._roleArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksCluster.prototype, "roleArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._roleArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksCluster.prototype, "status", {
        // status - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('status');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksCluster.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    EksCluster.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(EksCluster.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksCluster.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    EksCluster.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(EksCluster.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksCluster.prototype, "version", {
        get: function () {
            return this.getStringAttribute('version');
        },
        set: function (value) {
            this._version = value;
        },
        enumerable: false,
        configurable: true
    });
    EksCluster.prototype.resetVersion = function () {
        this._version = undefined;
    };
    Object.defineProperty(EksCluster.prototype, "versionInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._version;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksCluster.prototype, "encryptionConfig", {
        get: function () {
            return this.interpolationForAttribute('encryption_config');
        },
        set: function (value) {
            this._encryptionConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    EksCluster.prototype.resetEncryptionConfig = function () {
        this._encryptionConfig = undefined;
    };
    Object.defineProperty(EksCluster.prototype, "encryptionConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._encryptionConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksCluster.prototype, "kubernetesNetworkConfig", {
        get: function () {
            return this.interpolationForAttribute('kubernetes_network_config');
        },
        set: function (value) {
            this._kubernetesNetworkConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    EksCluster.prototype.resetKubernetesNetworkConfig = function () {
        this._kubernetesNetworkConfig = undefined;
    };
    Object.defineProperty(EksCluster.prototype, "kubernetesNetworkConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._kubernetesNetworkConfig;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksCluster.prototype, "timeouts", {
        get: function () {
            return this.interpolationForAttribute('timeouts');
        },
        set: function (value) {
            this._timeouts = value;
        },
        enumerable: false,
        configurable: true
    });
    EksCluster.prototype.resetTimeouts = function () {
        this._timeouts = undefined;
    };
    Object.defineProperty(EksCluster.prototype, "timeoutsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._timeouts;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksCluster.prototype, "vpcConfig", {
        get: function () {
            return this.interpolationForAttribute('vpc_config');
        },
        set: function (value) {
            this._vpcConfig = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EksCluster.prototype, "vpcConfigInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._vpcConfig;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    EksCluster.prototype.synthesizeAttributes = function () {
        return {
            enabled_cluster_log_types: cdktf.listMapper(cdktf.stringToTerraform)(this._enabledClusterLogTypes),
            name: cdktf.stringToTerraform(this._name),
            role_arn: cdktf.stringToTerraform(this._roleArn),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            version: cdktf.stringToTerraform(this._version),
            encryption_config: cdktf.listMapper(eksClusterEncryptionConfigToTerraform)(this._encryptionConfig),
            kubernetes_network_config: cdktf.listMapper(eksClusterKubernetesNetworkConfigToTerraform)(this._kubernetesNetworkConfig),
            timeouts: eksClusterTimeoutsToTerraform(this._timeouts),
            vpc_config: cdktf.listMapper(eksClusterVpcConfigToTerraform)(this._vpcConfig)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    EksCluster.tfResourceType = "aws_eks_cluster";
    return EksCluster;
}(cdktf.TerraformResource));
exports.EksCluster = EksCluster;
