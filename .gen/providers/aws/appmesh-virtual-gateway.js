"use strict";
// https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html
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
exports.AppmeshVirtualGateway = void 0;
var cdktf = require("cdktf");
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        certificate_chain: cdktf.stringToTerraform(struct.certificateChain),
        private_key: cdktf.stringToTerraform(struct.privateKey)
    };
}
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        secret_name: cdktf.stringToTerraform(struct.secretName)
    };
}
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        file: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateFileToTerraform)(struct.file),
        sds: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateSdsToTerraform)(struct.sds)
    };
}
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        exact: cdktf.listMapper(cdktf.stringToTerraform)(struct.exact)
    };
}
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        match: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesMatchToTerraform)(struct.match)
    };
}
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        certificate_authority_arns: cdktf.listMapper(cdktf.stringToTerraform)(struct.certificateAuthorityArns)
    };
}
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        certificate_chain: cdktf.stringToTerraform(struct.certificateChain)
    };
}
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        secret_name: cdktf.stringToTerraform(struct.secretName)
    };
}
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        acm: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustAcmToTerraform)(struct.acm),
        file: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustFileToTerraform)(struct.file),
        sds: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustSdsToTerraform)(struct.sds)
    };
}
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        subject_alternative_names: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationSubjectAlternativeNamesToTerraform)(struct.subjectAlternativeNames),
        trust: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationTrustToTerraform)(struct.trust)
    };
}
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        enforce: cdktf.booleanToTerraform(struct.enforce),
        ports: cdktf.listMapper(cdktf.numberToTerraform)(struct.ports),
        certificate: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsCertificateToTerraform)(struct.certificate),
        validation: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsValidationToTerraform)(struct.validation)
    };
}
function appmeshVirtualGatewaySpecBackendDefaultsClientPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        tls: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsClientPolicyTlsToTerraform)(struct.tls)
    };
}
function appmeshVirtualGatewaySpecBackendDefaultsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        client_policy: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsClientPolicyToTerraform)(struct.clientPolicy)
    };
}
function appmeshVirtualGatewaySpecListenerConnectionPoolGrpcToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        max_requests: cdktf.numberToTerraform(struct.maxRequests)
    };
}
function appmeshVirtualGatewaySpecListenerConnectionPoolHttpToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        max_connections: cdktf.numberToTerraform(struct.maxConnections),
        max_pending_requests: cdktf.numberToTerraform(struct.maxPendingRequests)
    };
}
function appmeshVirtualGatewaySpecListenerConnectionPoolHttp2ToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        max_requests: cdktf.numberToTerraform(struct.maxRequests)
    };
}
function appmeshVirtualGatewaySpecListenerConnectionPoolToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        grpc: cdktf.listMapper(appmeshVirtualGatewaySpecListenerConnectionPoolGrpcToTerraform)(struct.grpc),
        http: cdktf.listMapper(appmeshVirtualGatewaySpecListenerConnectionPoolHttpToTerraform)(struct.http),
        http2: cdktf.listMapper(appmeshVirtualGatewaySpecListenerConnectionPoolHttp2ToTerraform)(struct.http2)
    };
}
function appmeshVirtualGatewaySpecListenerHealthCheckToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        healthy_threshold: cdktf.numberToTerraform(struct.healthyThreshold),
        interval_millis: cdktf.numberToTerraform(struct.intervalMillis),
        path: cdktf.stringToTerraform(struct.path),
        port: cdktf.numberToTerraform(struct.port),
        protocol: cdktf.stringToTerraform(struct.protocol),
        timeout_millis: cdktf.numberToTerraform(struct.timeoutMillis),
        unhealthy_threshold: cdktf.numberToTerraform(struct.unhealthyThreshold)
    };
}
function appmeshVirtualGatewaySpecListenerPortMappingToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        port: cdktf.numberToTerraform(struct.port),
        protocol: cdktf.stringToTerraform(struct.protocol)
    };
}
function appmeshVirtualGatewaySpecListenerTlsCertificateAcmToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        certificate_arn: cdktf.stringToTerraform(struct.certificateArn)
    };
}
function appmeshVirtualGatewaySpecListenerTlsCertificateFileToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        certificate_chain: cdktf.stringToTerraform(struct.certificateChain),
        private_key: cdktf.stringToTerraform(struct.privateKey)
    };
}
function appmeshVirtualGatewaySpecListenerTlsCertificateSdsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        secret_name: cdktf.stringToTerraform(struct.secretName)
    };
}
function appmeshVirtualGatewaySpecListenerTlsCertificateToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        acm: cdktf.listMapper(appmeshVirtualGatewaySpecListenerTlsCertificateAcmToTerraform)(struct.acm),
        file: cdktf.listMapper(appmeshVirtualGatewaySpecListenerTlsCertificateFileToTerraform)(struct.file),
        sds: cdktf.listMapper(appmeshVirtualGatewaySpecListenerTlsCertificateSdsToTerraform)(struct.sds)
    };
}
function appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        exact: cdktf.listMapper(cdktf.stringToTerraform)(struct.exact)
    };
}
function appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        match: cdktf.listMapper(appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesMatchToTerraform)(struct.match)
    };
}
function appmeshVirtualGatewaySpecListenerTlsValidationTrustFileToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        certificate_chain: cdktf.stringToTerraform(struct.certificateChain)
    };
}
function appmeshVirtualGatewaySpecListenerTlsValidationTrustSdsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        secret_name: cdktf.stringToTerraform(struct.secretName)
    };
}
function appmeshVirtualGatewaySpecListenerTlsValidationTrustToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        file: cdktf.listMapper(appmeshVirtualGatewaySpecListenerTlsValidationTrustFileToTerraform)(struct.file),
        sds: cdktf.listMapper(appmeshVirtualGatewaySpecListenerTlsValidationTrustSdsToTerraform)(struct.sds)
    };
}
function appmeshVirtualGatewaySpecListenerTlsValidationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        subject_alternative_names: cdktf.listMapper(appmeshVirtualGatewaySpecListenerTlsValidationSubjectAlternativeNamesToTerraform)(struct.subjectAlternativeNames),
        trust: cdktf.listMapper(appmeshVirtualGatewaySpecListenerTlsValidationTrustToTerraform)(struct.trust)
    };
}
function appmeshVirtualGatewaySpecListenerTlsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        mode: cdktf.stringToTerraform(struct.mode),
        certificate: cdktf.listMapper(appmeshVirtualGatewaySpecListenerTlsCertificateToTerraform)(struct.certificate),
        validation: cdktf.listMapper(appmeshVirtualGatewaySpecListenerTlsValidationToTerraform)(struct.validation)
    };
}
function appmeshVirtualGatewaySpecListenerToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        connection_pool: cdktf.listMapper(appmeshVirtualGatewaySpecListenerConnectionPoolToTerraform)(struct.connectionPool),
        health_check: cdktf.listMapper(appmeshVirtualGatewaySpecListenerHealthCheckToTerraform)(struct.healthCheck),
        port_mapping: cdktf.listMapper(appmeshVirtualGatewaySpecListenerPortMappingToTerraform)(struct.portMapping),
        tls: cdktf.listMapper(appmeshVirtualGatewaySpecListenerTlsToTerraform)(struct.tls)
    };
}
function appmeshVirtualGatewaySpecLoggingAccessLogFileToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        path: cdktf.stringToTerraform(struct.path)
    };
}
function appmeshVirtualGatewaySpecLoggingAccessLogToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        file: cdktf.listMapper(appmeshVirtualGatewaySpecLoggingAccessLogFileToTerraform)(struct.file)
    };
}
function appmeshVirtualGatewaySpecLoggingToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        access_log: cdktf.listMapper(appmeshVirtualGatewaySpecLoggingAccessLogToTerraform)(struct.accessLog)
    };
}
function appmeshVirtualGatewaySpecToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    return {
        backend_defaults: cdktf.listMapper(appmeshVirtualGatewaySpecBackendDefaultsToTerraform)(struct.backendDefaults),
        listener: cdktf.listMapper(appmeshVirtualGatewaySpecListenerToTerraform)(struct.listener),
        logging: cdktf.listMapper(appmeshVirtualGatewaySpecLoggingToTerraform)(struct.logging)
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html aws_appmesh_virtual_gateway}
*/
var AppmeshVirtualGateway = /** @class */ (function (_super) {
    __extends(AppmeshVirtualGateway, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appmesh_virtual_gateway.html aws_appmesh_virtual_gateway} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppmeshVirtualGatewayConfig
    */
    function AppmeshVirtualGateway(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_appmesh_virtual_gateway',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._meshName = config.meshName;
        _this._meshOwner = config.meshOwner;
        _this._name = config.name;
        _this._tags = config.tags;
        _this._tagsAll = config.tagsAll;
        _this._spec = config.spec;
        return _this;
    }
    Object.defineProperty(AppmeshVirtualGateway.prototype, "arn", {
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
    Object.defineProperty(AppmeshVirtualGateway.prototype, "createdDate", {
        // created_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('created_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshVirtualGateway.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshVirtualGateway.prototype, "lastUpdatedDate", {
        // last_updated_date - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('last_updated_date');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshVirtualGateway.prototype, "meshName", {
        get: function () {
            return this.getStringAttribute('mesh_name');
        },
        set: function (value) {
            this._meshName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshVirtualGateway.prototype, "meshNameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._meshName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshVirtualGateway.prototype, "meshOwner", {
        get: function () {
            return this.getStringAttribute('mesh_owner');
        },
        set: function (value) {
            this._meshOwner = value;
        },
        enumerable: false,
        configurable: true
    });
    AppmeshVirtualGateway.prototype.resetMeshOwner = function () {
        this._meshOwner = undefined;
    };
    Object.defineProperty(AppmeshVirtualGateway.prototype, "meshOwnerInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._meshOwner;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshVirtualGateway.prototype, "name", {
        get: function () {
            return this.getStringAttribute('name');
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshVirtualGateway.prototype, "nameInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshVirtualGateway.prototype, "resourceOwner", {
        // resource_owner - computed: true, optional: false, required: false
        get: function () {
            return this.getStringAttribute('resource_owner');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshVirtualGateway.prototype, "tags", {
        get: function () {
            return this.interpolationForAttribute('tags');
        },
        set: function (value) {
            this._tags = value;
        },
        enumerable: false,
        configurable: true
    });
    AppmeshVirtualGateway.prototype.resetTags = function () {
        this._tags = undefined;
    };
    Object.defineProperty(AppmeshVirtualGateway.prototype, "tagsInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshVirtualGateway.prototype, "tagsAll", {
        get: function () {
            return this.interpolationForAttribute('tags_all'); // Getting the computed value is not yet implemented
        },
        set: function (value) {
            this._tagsAll = value;
        },
        enumerable: false,
        configurable: true
    });
    AppmeshVirtualGateway.prototype.resetTagsAll = function () {
        this._tagsAll = undefined;
    };
    Object.defineProperty(AppmeshVirtualGateway.prototype, "tagsAllInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._tagsAll;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshVirtualGateway.prototype, "spec", {
        get: function () {
            return this.interpolationForAttribute('spec');
        },
        set: function (value) {
            this._spec = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppmeshVirtualGateway.prototype, "specInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._spec;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    AppmeshVirtualGateway.prototype.synthesizeAttributes = function () {
        return {
            mesh_name: cdktf.stringToTerraform(this._meshName),
            mesh_owner: cdktf.stringToTerraform(this._meshOwner),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            spec: cdktf.listMapper(appmeshVirtualGatewaySpecToTerraform)(this._spec)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    AppmeshVirtualGateway.tfResourceType = "aws_appmesh_virtual_gateway";
    return AppmeshVirtualGateway;
}(cdktf.TerraformResource));
exports.AppmeshVirtualGateway = AppmeshVirtualGateway;
